import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

class Login extends PureComponent {
    
    render() {
        const {loginState} = this.props;

        return loginState ? <div style={{margin: '200px', textAlign: 'center', fontSize: '30px'}}>写文章</div> : <Redirect to="/login" />
    }
}

const mapStateToProps = (state) => ({
    loginState: state.getIn(['login', 'loginState'])
});

export default connect(mapStateToProps, null)(Login);