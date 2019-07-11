import request from '../helpers/request';
//blog进行接口封装
const URL = {
    GET_LIST: '/blog',
    GET_DETAIL: '/blog/:blogId',
    CREATE: '/blog/:blogId',
    UPDATA: '/blog/:blogId'
};

export default {
    getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
        return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
    },
    getIndexBlogs({ page = 1 } = { page: 1 }) {
        return this.getBlogs({ page, atIndex: true })
    },
    getIndexBlogsByUserId(userId, { page = 1, atIndex } = { page: 1 }) {
        return this.getBlogs({userId,page,atIndex})
    },
    getDetail({blogId}){
        return request(URL.GET_DETAIL.replace(':blogId',blogId))
    },
    updateBlog({blogId},{title,content,description,atIndex}){
        return request(URL.UPDATA.replace(':blogId'.blogId),'PATH',{title,content,description,atIndex})
    },
    deleteBlog({blogId}){
        return request(URL.DELETE.replace(':blogId',blogId),'DELETE')
    },
    createBlog({title ='',content='',description='',atIndex= false} = {title:'',content:'',description:'',atIndex:false}){
        return request(URL.CREATE,'POST',{title,content,description,atIndex})
    }
};


//auth.request({username:'hunger10',password:'123456'})
