import React, {Component} from 'react';

import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="ad" src="https://upload.jianshu.io/admin_banners/web_images/4749/cfec798629943d9d9db6876b2cb20fddf29b7efe.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />

                    <Topic />

                    <List />
                </HomeLeft>
                <HomeRight>

                    <Recommend />

                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;