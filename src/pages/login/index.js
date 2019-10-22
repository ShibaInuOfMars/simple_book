import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import {actionCreators} from './store';

import {
    LoginWrapper,
    LoginContent,
    LoginForm,
    InputWrapper,
    LoginBtn
} from './style';

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.account = React.createRef();
        this.password = React.createRef();
    }
    
    render() {
        const {loginState, login} = this.props;

        return loginState ? <Redirect to="/" /> : (
            <LoginWrapper>
                <LoginContent>
                    <h4 className="title"><span>登录</span></h4>
                    <LoginForm>
                        <InputWrapper>
                            <input placeholder="账号" ref={this.account}  />
                        </InputWrapper>
                        <InputWrapper>
                            <input className="bottom" type="password" placeholder="密码" ref={this.password} />
                        </InputWrapper>
                        <LoginBtn onClick={() => login(this.account.current, this.password.current)}>登录</LoginBtn>
                    </LoginForm>
                </LoginContent>
            </LoginWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    loginState: state.getIn(['login', 'loginState'])
});

const mapDispatchToProps = (dispatch) => ({
    login(account, password) {
        // console.log(account, password);
        dispatch(actionCreators.login(account.value, password.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);