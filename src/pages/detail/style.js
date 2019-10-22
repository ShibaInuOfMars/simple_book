import styled from 'styled-components';

export const DetailWrapper = styled.div`
    padding-top: 56px;
    width: 960px;
    margin: 0 auto;
`;

export const DetailHeader = styled.div`
    margin: 40px 0 0;

    h1 {
        font-size: 30px;
        font-weight: 700;
        word-break: break-word;
        color: #404040;
        margin-bottom: 15px;
    }

    .info {
        margin-bottom: 32px;

        span {
            color: #969696;
            font-size: 13px;
            margin-right: 8px;
        }
    }
`;

export const DetailContent = styled.div`
    p {
        margin-bottom: 20px;
        word-break: break-word;
        font-size: 16px;
        color: #404040;
        text-indent: 2em;
        line-height: 30px;

        b {
            font-weight: bolder;
        }
    }

    > div {
        width: 100%;
        margin: 0;
        padding-bottom: 25px;
        text-align: center;
        font-size: 0;

        img {
            width: 100%;
        }
    }
`;