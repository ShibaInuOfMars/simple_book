import React, {Component} from 'react';

import {
    WriterWrapper,
    Title,
    WriterItem
} from './style';

class Writer extends Component {
    
    render() {
        return (
            <WriterWrapper>
                <Title>
                    <span>推荐作者</span>
                    <span className="page-change"><i className="iconfont">&#xe63f;</i>换一批</span>
                </Title>
                <WriterItem>
                    <span className="avatar"> 
                        <img src="//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    </span>
                    <span className="follow">+关注</span>
                    <span className="name">xxxx</span>
                    <p>写了698.3k字 · 24.4k喜欢</p>
                </WriterItem>
                <WriterItem>
                    <span className="avatar"> 
                        <img src="//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    </span>
                    <span className="follow">+关注</span>
                    <span className="name">xxxx</span>
                    <p>写了698.3k字 · 24.4k喜欢</p>
                </WriterItem>
                <WriterItem>
                    <span className="avatar"> 
                        <img src="//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    </span>
                    <span className="follow">+关注</span>
                    <span className="name">xxxx</span>
                    <p>写了698.3k字 · 24.4k喜欢</p>
                </WriterItem>
                <WriterItem>
                    <span className="avatar"> 
                        <img src="//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    </span>
                    <span className="follow">+关注</span>
                    <span className="name">xxxx</span>
                    <p>写了698.3k字 · 24.4k喜欢</p>
                </WriterItem>
                <WriterItem>
                    <span className="avatar"> 
                        <img src="//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    </span>
                    <span className="follow">+关注</span>
                    <span className="name">xxxx</span>
                    <p>写了698.3k字 · 24.4k喜欢</p>
                </WriterItem>
                <span className="find-more">查看全部&gt;</span>
            </WriterWrapper>
        );
    }
}

export default Writer;