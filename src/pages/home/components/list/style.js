import styled from 'styled-components';

export const ListWrapper = styled.div`
    border-top: 1px solid #f0f0f0;
    padding-top: 15px;   
`;

export const ListItem = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    min-height: 140px;
    box-sizing: border-box;
`;

export const ListThumbnail = styled.a`
    width: 150px;
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    height: 100px;

    .list-pic {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        box-sizing: border-box;
        vertical-align: middle;
    }
`;

export const ListContent = styled.div`
    padding-right: 165px;

    .title {
        color: #000;
        text-decoration: none;
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }

    .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const ListMeta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;

    > span {
        margin-right: 10px;
        color: #b4b4b4;
    }

    .iconfont {
        font-size: 13px;
        margin-right: 3px;
    }

    .jsd-meta {
        color: #ea6f5a;
        
        .iconfont {
            
        }
    }

    .author {
        cursor: pointer;

        &:hover {
            color: #787878;
        }
    }

    .comment {
        cursor: pointer;

        &:hover {
            color: #787878;
        }
    }
`;