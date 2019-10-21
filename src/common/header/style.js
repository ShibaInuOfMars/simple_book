import styled from 'styled-components';

import logo from './../../static/images/logo.png';

export const HeaderWrapper = styled.div`
    height: 55px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 17px;
`;

export const HeaderContent = styled.div`
    width: 1440px;
    height: 100%;
    margin: 0 auto;
`;

export const HeaderLogo = styled.a.attrs({
    href: '/'
})`
    float: left;
    width: 100px;
    height: 100%;
    background: url(${logo}) no-repeat;
    background-size: cover;
`;

export const HeaderCenter = styled.div`
    width: 945px;
    height: 100%;
    line-height: 55px;
    margin: 0 auto;
`;

export const HeaderNav = styled.a`
    padding: 0 15px;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;

    &.nav-left {
        float: left;
        color: #333;

        .iconfont {
            font-size: 20px;
            margin-right: 5px;
        }

        &.app {
            &:hover {
                background: #f5f5f5;
            }
        }
    }

    &.nav-right {
        float: right;
        color: #939393;
        font-size: 15px;

        .iconfont {
            font-size: 20px;
        }
    }

    &.actived {
        color: #ea6f5a;
    }
`;

export const HeaderToolBtn = styled.a`
    float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    text-align: center;
    padding: 6px 12px;
    box-sizing: border-box;
    cursor: pointer;

    &.write {
        width: 100px;
        height: 40px;
        line-height: 24px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;

        &:hover {
            color: #fff;
            background-color: #ec6149;
        }

        .iconfont {
            font-size: 20px;
        }
    }

    &.sign-up {
        &:hover {
            color: #ec6149;
            border-color: #ec6149;
            background-color: rgba(236,97,73,.05);
        }
    }
`;

export const HeaderSearchWrapper =  styled.div`
    position: relative;
    float: left;
    margin-left: 15px;

    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 11px;
        width: 30px;
        color: #969696;
        line-height: 30px;
        font-size: 20px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;

        &.focused {
            color: #fff;
            background: #969696;
        }
    }
`;

export const HeaderSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    margin-top: 9px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    font-size: 14px;

    &::placeholder {
        color: #999;
    }

    &.focused {
        width: 320px;
    }

    &.slide-enter {
        transition: width .2s ease-out;
    }

    &.slide-enter-active {
        width: 320px;
    }

    &.slide-exit {
        transition: width .2s ease-out;
    }

    &.slide-exit-active {
        width: 240px;
    }
`;