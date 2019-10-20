import React from 'react';

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
    HeaderSearch
} from './style';

const Header = (props) => {
    const {focused, handleInputFocus, handleInputBlur} = props;

    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderLogo />
                <HeaderToolBtn className="write"><span className="iconfont">&#xe61b;</span>写文章</HeaderToolBtn>
                <HeaderToolBtn className="sign-up">注册</HeaderToolBtn>
                <HeaderCenter>
                    <HeaderNav className="nav-left actived"><span className="iconfont">&#xe786;</span>首页</HeaderNav>
                    <HeaderNav className="nav-left"><span className="iconfont">&#xe600;</span>下载App</HeaderNav>
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
                    </HeaderSearchWrapper>
                </HeaderCenter>
            </HeaderContent>
        </HeaderWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        // immutable对象不能直接通过点语法获取，需要通过get方法获取
        focused: state.header.get('focused')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);