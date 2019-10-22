import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import {
    WriterWrapper,
    Title,
    WriterItem
} from './style';

class Writer extends PureComponent {
    
    render() {
        const {writerList} = this.props;

        return (
            <WriterWrapper>
                <Title>
                    <span>推荐作者</span>
                    <span className="page-change"><i className="iconfont">&#xe63f;</i>换一批</span>
                </Title>
                {
                    writerList.map(item => (
                        <WriterItem key={item.get('id')}>
                            <span className="avatar"> 
                                <img src={item.get('imgUrl')} alt="" />
                            </span>
                            <span className="follow">+关注</span>
                            <span className="name">{item.get('name')}</span>
                            <p>{item.get('rank')}</p>
                        </WriterItem>
                    ))
                }
                <span className="find-more">查看全部&gt;</span>
            </WriterWrapper>
        );
    }
}

const mpaStateToProps = (state) => ({
    writerList: state.getIn(['home', 'writerList'])
});

export default connect(mpaStateToProps, null)(Writer);