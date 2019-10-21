import styled from 'styled-components';

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    box-sizing: border-box;
`;

export const RecommendItem = styled.a`
    cursor: pointer;

    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        vertical-align: middle;
    }
`;