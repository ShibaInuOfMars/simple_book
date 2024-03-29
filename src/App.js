import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './common/header/Header';
import Home  from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import Write from './pages/write/loadable';

import {Provider} from 'react-redux';

import store from './store';

import {GlobalStyled} from './style.js';

import {GlobalFontStyle} from './static/iconfont/iconfont';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <GlobalStyled />
                    <GlobalFontStyle />
                    <Router>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/detail/:id" component={Detail} />
                            <Route path="/login" component={Login} />
                            <Route path="/write" component={Write} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
