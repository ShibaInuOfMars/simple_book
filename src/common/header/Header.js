import React, {Component} from 'react';

import {connect} from 'react-redux';

import {actionCreators} from './store';

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
    PopularSearchSitch,
    PopularSearchList,
    PopularSearchItem
} from './style';

class Header extends Component {

    // 是否展示热门搜索
    getPopularSearch = () => {
        const {focused, popularSearchList} = this.props;

        if(focused) {
            return (
                <PopularSearch>
                    <PopularSearchTitle>
                        热门搜索
                        <PopularSearchSitch>
                            换一批
                        </PopularSearchSitch>
                    </PopularSearchTitle>
                    <PopularSearchList>
                        {
                            popularSearchList.map(item => {
                                return <PopularSearchItem key={item}>{item}</PopularSearchItem>
                            })
                        }
                    </PopularSearchList>
                </PopularSearch>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, handleInputFocus, handleInputBlur} = this.props;

        return (
            <HeaderWrapper>
                <HeaderContent>
                    <HeaderLogo />
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
                                timeout={200}
                                classNames="slide"
                            >
                                <HeaderSearch 
                                    className={focused ? 'focused' : ''} 
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                            </CSSTransition> 
                            <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe615;</span>
    
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
        popularSearchList: state.getIn(['header', 'popularSearchList'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getPopularSearchList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);