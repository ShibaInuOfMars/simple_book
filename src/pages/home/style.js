import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 56px auto 0;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 640px;
    padding: 30px 0 0 15px;
    box-sizing: border-box;

    .ad {
        width: 100%;
        border-radius: 6px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
    padding-top: 30px;
`;

export const CodeWrapper = styled.a`
    float: left;
    display: block;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;

    .qrcode {
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }

    .info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        line-height: 1.5;

        .title {
            font-size: 15px;
            color: #333;
        }

        .desc {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`;

export const BackTop = styled.div`
    position: fixed;
    bottom: 45px;
    right: 40px;
    z-index: 1040;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    display: block;
    margin-bottom: 10px;

    &:hover {
        background-color: hsla(0,0%,71%,.1);
        transition: .1s ease-in;
    }

    i {
        padding-top: 16px;
        display: block;

        &.iconfont {
            color: #333;
            font-size: 18px;
        }
    }
`;