import React, {Component} from 'react';

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

class Header extends Component {

    render() {
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
                            <HeaderSearch />
                            <span className="iconfont">&#xe615;</span>
                        </HeaderSearchWrapper>
                    </HeaderCenter>
                </HeaderContent>
            </HeaderWrapper>
        );
    }
}

export default Header;