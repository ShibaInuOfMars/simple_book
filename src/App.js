import React, {Component} from 'react';

import Header from './common/header/Header';

import {GlobalStyled} from './style.js';

import {GlobalFontStyle} from './static/iconfont/iconfont';

class App extends Component {
    render() {
        return (
            <div className="app">
                <GlobalStyled />
                <GlobalFontStyle />
                <Header />
            </div>
        );
    }
}

export default App;
