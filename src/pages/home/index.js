// import React, {Component} from 'react';
// 每当同一个store里的任意一个数据发生变化，那么所有组件都会重新渲染一次，不管那个数据是否被其他组件所使用，这样就带来了性能问题
// 解决方法1：可以在每个组件中使用shouldComponentUpdate生命周期函数来判断该组件是否需要更新
// 解决方法2：使用PureComponent代替Component，PureComponent内部自己实现了shouldComponentUpdate方法
// 注意：因为这次的数据管理使用了immutable.js，所有可以放心使用PureComponent，如果没有使用immutable.js，那么不要使用PureComponent，因为会存在潜在的坑，那么就使用Component，并且手动实现shouldComponentUpdate方法
import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import {actionCreators} from './store';

import {animate} from './../../utils/global';

import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    CodeWrapper,
    BackTop
} from './style';

class Home extends PureComponent {
    
    render() {
        const {showBackTopBtn} = this.props;

        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="ad" src="https://upload.jianshu.io/admin_banners/web_images/4749/cfec798629943d9d9db6876b2cb20fddf29b7efe.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />

                        <Topic />

                        <List />
                    </HomeLeft>
                    <HomeRight>

                        <Recommend />
                        
                        <CodeWrapper>
                            <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
                            <div className="info">
                                <div className="title">
                                    下载简书手机APP  &gt;
                                </div>
                                <div className="desc">
                                    随时随地发现和创作内容
                                </div>
                            </div>
                        </CodeWrapper>

                        <Writer />
                    </HomeRight>
                </HomeWrapper>

                {
                    showBackTopBtn ? <BackTop onClick={this.scrollToTop}><i className="iconfont">&#xe646;</i></BackTop> : null
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.getHomeData();
        this.changeBtnState();
    }

    changeBtnState() {
        window.addEventListener('scroll', this.props.isShowBackTopBtn);
    }

    scrollToTop() {
        // 做缓动动画返回顶部
        let docB = document.documentElement || document.body;
        animate(docB, {scrollTop: '0'}, 400, 'ease-out');
    }
}

const mapStateToProps = (state) => ({
    showBackTopBtn: state.getIn(['home', 'showBackTopBtn'])
});

const mapDispatchToProps = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.asyncGetHomeData())
    },

    isShowBackTopBtn() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        let state = scrollTop >= 250 ? true : false;

        dispatch(actionCreators.showBackTopBtn(state));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);