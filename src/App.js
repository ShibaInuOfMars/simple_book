import React, {Component} from 'react';

import Header from './common/header/Header';

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
                    <Header />
                </Provider>
            </div>
        );
    }
}

export default App;
