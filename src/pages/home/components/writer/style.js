import styled from 'styled-components';

export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    position: relative;

    .find-more {
        position: absolute;
        padding: 7px 7px 7px 12px;
        left: 0;
        bottom: -60px;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
    }
`;

export const Title = styled.div`
    text-align: left;

    span {
        font-size: 14px;
        color: #969696;
    }

    .page-change {
        float: right;
        font-size: 14px;
        color: #969696;
        margin-top: -1px;
        cursor: pointer;

        .iconfont {
            font-size: 15px;
            margin-right: 3px;
        }

        &:hover {
            color: #787878;
        }
    }
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    line-height: 20px;

    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-align: middle;
        }
    }

    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        border-color: #42c02e;
        cursor: pointer;
    }

    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        cursor: pointer;
        color: #333;
        text-align: left;
    }

    p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        text-align: left;
    }
`;