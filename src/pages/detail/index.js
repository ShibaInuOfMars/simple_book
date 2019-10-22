import React, {Component} from 'react';

import {connect} from 'react-redux';

import {actionCreators} from './store';

import {
    DetailWrapper,
    DetailHeader,
    DetailContent
} from './style';

class Detail extends Component {
    
    render() {
        const {title, content} = this.props;

        return (
            <DetailWrapper>
                <DetailHeader>
                    <h1>{title}</h1>
                    <div className="info"><span>2019.10.22 21:00:00</span><span>字数 000</span><span>阅读 999+</span></div>
                </DetailHeader>
                <DetailContent dangerouslySetInnerHTML={{__html: content}}></DetailContent>
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);