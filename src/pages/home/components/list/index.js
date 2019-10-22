import React, {Component} from 'react';

import {connect} from 'react-redux';

import {actionCreators} from './../../store';

import {
    ListWrapper,
    ListItem,
    ListThumbnail,
    ListContent,
    ListMeta,
    LoadMore
} from './style';

class List extends Component {
    
    render() {
        const {articleList, articleListPage, addArticle} = this.props;

        return (
            <ListWrapper>
                {
                    articleList.map((item, index) => (
                        <ListItem key={index}>
                            <ListThumbnail>
                                <img className="list-pic" src={item.get('imgUrl')} alt="" />
                            </ListThumbnail>
                            <ListContent>
                                <a href="http://www.baidu.com" className="title">{item.get('title')}</a>
                                <p className="abstract">{item.get('abstract')}</p>
                                <ListMeta>
                                    <span className="jsd-meta">
                                        <span className="iconfont">&#xe63d;</span>
                                        99
                                    </span>
                                    <span className="author">
                                        simple_book
                                    </span>
                                    <span className="comment">
                                        <span className="iconfont">&#xe684;</span>
                                        999
                                    </span>
                                    <span className="like">
                                        <span className="iconfont">&#xe602;</span>
                                        999
                                    </span>
                                </ListMeta>
                            </ListContent>
                        </ListItem>
                    ))
                }

                {
                    articleList.size ? <LoadMore onClick={() => addArticle(articleListPage)}>阅读更多</LoadMore> : null
                }
            </ListWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    articleListPage: state.getIn(['home', 'articleListPage'])
});

const mapDispatchToProps = (dispatch) => ({
    addArticle(page) {
        dispatch(actionCreators.asyncAddArticle(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);