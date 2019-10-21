import styled from 'styled-components';

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.a`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;

    .topic-pic {
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const TopicMore = styled.a`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    font-size: 14px;
    color: #939393;
    cursor: pointer;
`;