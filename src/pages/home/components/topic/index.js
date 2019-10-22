import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import {
    TopicWrapper, 
    TopicItem,
    TopicMore
} from './style';

class Topic extends PureComponent {
    
    render() {
        const {topicList} = this.props;

        return (
            <TopicWrapper>
                {
                    topicList.map(item => (
                        // immutable对象不能直接通过点语法获取，需要通过get方法
                        <TopicItem key={item.get('id')}>
                            <img className="topic-pic" src={item.get('imgUrl')} alt="" />
                            <span>{item.get('title')}</span>
                        </TopicItem>
                    ))
                }
                
                <TopicMore>更多热门专题&gt;</TopicMore>
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);