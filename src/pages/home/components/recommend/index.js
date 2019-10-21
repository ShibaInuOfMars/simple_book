import React, {Component} from 'react';

import {connect} from 'react-redux';

import {
    RecommendWrapper,
    RecommendItem
} from './style';

class Recommend extends Component {
    
    render() {
        const {recommendList} = this.props;

        return (
            <RecommendWrapper>
                {
                    recommendList.map(item => (
                        <RecommendItem key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt="" />
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);