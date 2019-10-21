import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            "id": 1,
            "title": "社会热点",
            "imgUrl": "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        }, 
        {
            "id": 2,
            "title": "手手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        },
        {
            "id": 3,
            "title": "手手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        },
        {
            "id": 4,
            "title": "手手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        },
        {
            "id": 5,
            "title": "手手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        },
        {
            "id": 6,
            "title": "手手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        },
        {
            "id": 7,
            "title": "手手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
        }
    ],

    articleList: [
        {
            id: 1,
            title: '【笔记】一些简单的自我提升Tips',
            desc: '最近看了些自我提升相关的内容 挑几个不错的总结一下 大家有爱自取~ tips： 不要高估自己的专注力，将任务分解，每次只做一件事与其怀揣远大梦想...',
            imgUrl: '//upload-images.jianshu.io/upload_images/11631398-fbd9296b0554ef03.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '【笔记】一些简单的自我提升Tips',
            desc: '最近看了些自我提升相关的内容 挑几个不错的总结一下 大家有爱自取~ tips： 不要高估自己的专注力，将任务分解，每次只做一件事与其怀揣远大梦想...',
            imgUrl: '//upload-images.jianshu.io/upload_images/11631398-fbd9296b0554ef03.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '【笔记】一些简单的自我提升Tips',
            desc: '最近看了些自我提升相关的内容 挑几个不错的总结一下 大家有爱自取~ tips： 不要高估自己的专注力，将任务分解，每次只做一件事与其怀揣远大梦想...',
            imgUrl: '//upload-images.jianshu.io/upload_images/11631398-fbd9296b0554ef03.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ] ,

    recommendList: [
        {
            id: 1,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id: 2,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id: 3,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id: 4,
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ]
});

export default (state = defaultState, action) => {
    return state;
};