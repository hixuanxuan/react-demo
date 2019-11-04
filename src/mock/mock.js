import  Mock from 'mockjs';
const Random = require('mockjs').Random;
const uuidv4 = require('uuid/v4');

Mock.mock('/api/getRecommendList','get', {
    "code":0,
    "data|11-38":[
        '@string'
    ]
//data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
});

Mock.mock('/api/getListData','get',{
    "code":200,
    "data|8":[
        {
            "id":uuidv4(),
            "title":'@string',
            "content":Random.paragraph( 3, 6 ),
            "imgurl":Random.image('150x100'),
            "aggreeNum":Random.integer( 0, 30 ),
            "commentNum":Random.integer( 0, 10 ),
        }
    ]
})

Mock.mock(/\/api\/getDetail\/\S+/,'get',function(options){
    // console.log(options)
    return {
       "data": {
        'name': Random.name(),  // 中文名称
        'id': options.url,    // 属性值自动加 1，初始值为88
        'relateTime': Random.datetime('y-MM-dd HH:mm:ss'),  // 日期
        'avatar':Random.image( '46x46', '#ccc', 'avatar' ),
        'title': Random.ctitle( 5, 12 ),
        'isGuanzhu':Random.boolean(),  // true的概率是1/3
        'wordNum': Random.integer(200,1000),
        'readNum': Random.integer(100,500),
        'diaNum':Random.float(0,100.0,0,2),
        'content':Random.cparagraph( 50, 150 )}
    }
})

//延时200-600毫秒请求到数据
Mock.setup({
    timeout: '800-1800'
})