import React, {Component} from 'react';

import {connect} from 'react-redux';

import {
    ListWrapper,
    ListItem,
    ListThumbnail,
    ListContent,
    ListMeta
} from './style';

class List extends Component {
    
    render() {
        const {articleList} = this.props;

        return (
            <ListWrapper>
                {
                    articleList.map(item => (
                        <ListItem key={item.get('id')}>
                            <ListThumbnail>
                                <img className="list-pic" src={item.get('imgUrl')} alt="" />
                            </ListThumbnail>
                            <ListContent>
                                <a href="http://www.baidu.com" className="title">{item.get('title')}</a>
                                <p className="abstract">{item.get('desc')}</p>
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
            </ListWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
});

export default connect(mapStateToProps, null)(List);