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
    ]
});

export default (state = defaultState, action) => {
    return state;
};