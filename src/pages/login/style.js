import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`;

export const LoginContent = styled.div`
    width: 400px;
    margin: 200px auto 0;
    padding: 30px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;

    .title {
        margin: 0 auto 30px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
        font-size: 18px;
        line-height: 30px;
        box-sizing: border-box;

        span {
            display: inline-block;
            padding: 10px;
            font-weight: 700;
            color: #ea6f5a;
            border-bottom: 2px solid #ea6f5a;
        }
    }
`;

export const LoginForm = styled.div`
    box-sizing: border-box;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 0;

    input {
        box-sizing: border-box;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        outline: none;

        &.bottom {
            border-radius: 0 0 4px 4px;
        }
    }
`;

export const LoginBtn = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;

    &:hover {
        background: #187cb7;
    }
`;