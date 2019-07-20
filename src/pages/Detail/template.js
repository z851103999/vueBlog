import marked from 'marked';
import blog from '@/api/blog';

export default {
  data() {
    return {
      title: '',//标题
      rawContent: '',//内容
      user: {},//用户信息
      createdAt: ''//发布时间
    }
  },
  created(){
    this.blogId =this.$router.parames.blogId
    blog.getDetail({blogId:this.blogId}).then(res =>{
      // console.log(res)
      this.title =res.data.title
      this.rawContent =res.data.rawContent
      this.createAt = res.data.createAt
      this.user =res.data.user
    })
  },
  computed:{
    mardown(){
      return marked(this.rawContent)
    }
  }
}