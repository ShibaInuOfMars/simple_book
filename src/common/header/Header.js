import React, {Component} from 'react';

import {connect} from 'react-redux';

import {actionCreators} from './store';

import {Link} from 'react-router-dom';

// 实现动画效果
import { CSSTransition } from 'react-transition-group';

import {
    HeaderWrapper,
    HeaderContent,
    HeaderLogo,
    HeaderCenter,
    HeaderNav,
    HeaderToolBtn,
    HeaderSearchWrapper,
    HeaderSearch,
    PopularSearch,
    PopularSearchTitle,
    PopularSearchSwitch,
    PopularSearchList,
    PopularSearchItem
} from './style';

class Header extends Component {
    constructor(props) {
        super(props);

        this.refreshIcon = React.createRef();
    }

    // 是否展示热门搜索
    getPopularSearch = () => {
        const {focused, popularSearchList, page, totalPage, mouseInSearch, handleMouseEnter, handleMouseLeave, handleListSwitch} = this.props;

        // 注意: 此时 popularSearchList 是一个immutable对象，不能使用下标获取里面对应的内容
        // 通过toJS方法可以将immutable对象转成普通的js对象
        const newPopularSearchList = popularSearchList.toJS();

        const currentList = [];


        // 因为页面初始化的时候并没有获取列表的数据，而是当搜索框获得焦点的时候才发生ajax请求获取数据，所以需要判断
        if(newPopularSearchList.length) {
            /*
                page = 1   (1 - 1) * 10 = 0    i < 1 * 10  ===> 0~9
                page = 2   (2 - 1) * 10 = 10    i < 2 * 10  ===> 10~19
            */
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                // console.log(newPopularSearchList[i]); // undefined
                currentList.push(
                    <PopularSearchItem key={newPopularSearchList[i]}>{newPopularSearchList[i]}</PopularSearchItem>
                );
            }
        }

        if(focused || mouseInSearch) {
            return (
                <PopularSearch 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <PopularSearchTitle>
                        热门搜索
                        <PopularSearchSwitch onClick={() => handleListSwitch(page, totalPage, this.refreshIcon)}>
                            <span ref={this.refreshIcon} className="iconfont refresh">&#xe63f;</span>换一批
                        </PopularSearchSwitch>
                    </PopularSearchTitle>
                    <PopularSearchList>
                        {currentList}
                    </PopularSearchList>
                </PopularSearch>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, popularSearchList, handleInputFocus, handleInputBlur} = this.props;

        return (
            <HeaderWrapper>
                <HeaderContent>
                    <Link to="/">
                        <HeaderLogo />
                    </Link>
                    
                    <HeaderToolBtn className="write"><span className="iconfont">&#xe61b;</span>写文章</HeaderToolBtn>
                    <HeaderToolBtn className="sign-up">注册</HeaderToolBtn>
                    <HeaderCenter>
                        <HeaderNav className="nav-left actived"><span className="iconfont">&#xe786;</span>首页</HeaderNav>
                        <HeaderNav className="nav-left app"><span className="iconfont">&#xe600;</span>下载App</HeaderNav>
                        <HeaderNav className="nav-right">登录</HeaderNav>
                        <HeaderNav className="nav-right"><span className="iconfont">&#xe636;</span></HeaderNav>
                        <HeaderSearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={300}
                                classNames="slide"
                            >
                                <HeaderSearch 
                                    className={focused ? 'focused' : ''} 
                                    onFocus={() => handleInputFocus(popularSearchList)}
                                    onBlur={handleInputBlur}
                                />
                            </CSSTransition> 
                            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe615;</span>
    
                            {this.getPopularSearch()}
                        </HeaderSearchWrapper>
                    </HeaderCenter>
                </HeaderContent>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // immutable对象不能直接通过点语法获取，需要通过get方法获取
        // state也是一个immutable对象了
        // focused: state.get('header').get('focused')  等同于下面一句
        focused: state.getIn(['header', 'focused']),
        mouseInSearch: state.getIn(['header', 'mouseInSearch']),
        popularSearchList: state.getIn(['header', 'popularSearchList']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(list);
            // 当列表为空的时候再发送请求
            (list.size === 0) && dispatch(actionCreators.getPopularSearchList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseInSearch())
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeaveSearch())
        },

        // 换一批
        handleListSwitch(page, totalPage, refreshIcon) {
            // 刷新的图标
            // console.log(refreshIcon.current);

            // 获取它的旋转属性的值
            const icon = refreshIcon.current;
            let rotateValue = icon.style.transform.replace(/[^0-9]/ig, '');
            
            rotateValue = parseInt(rotateValue) ? parseInt(rotateValue) : 0;

            icon.style.transform = 'rotate('+ (rotateValue + 360) +'deg)';

            if(page < totalPage) {
                dispatch(actionCreators.listSwitch(page + 1));
            } else {
                dispatch(actionCreators.listSwitch(1));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);