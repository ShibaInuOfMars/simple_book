import React, {Component} from 'react';

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

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            focused: false // 搜索框是否获得焦点
        }

        // 改变this指向
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        const {focused} = this.state;

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
                                    onFocus={this.handleInputFocus}
                                    onBlur={this.handleInputBlur}
                                />
                            </CSSTransition> 
                            <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe615;</span>
                        </HeaderSearchWrapper>
                    </HeaderCenter>
                </HeaderContent>
            </HeaderWrapper>
        );
    }

    handleInputFocus() {
        this.setState({
            focused: true
        });
    }

    handleInputBlur() {
        this.setState({
            focused: false
        });
    }
}

export default Header;