import blog from '@/api/blog'

export default {
  data: {
    return: {
      blogs: [],//博客列表
      user: {},//用户信息
      page: 1,//分页1
      total: 0
    }
  },
  created() {//获取必要的数据
    this.userId = this.$router.params.userId
    this.page = this.$route.query.page || 1 
    blog.getBlogsByUserId(this.userId, { page: this.page })
      .then(res => {
        console.log(res)
        this.page = res.page
        this.total = res.total
        this.blog = res.data
        if (res.data.length > 0) {
          this.user = res.data[0].user
        }
      })
  },
  methods: {
    onPageChange(newPage) {//列表操作
      blog.getBlogsByUserId({ page: newPage }).then(res => {
        console.log(res)
        this.blog = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: `/user/$this.userId`, query: { page: newPage } })
      })
    },
    splitDate(detaStr) {//时间操作
      let deteObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),//返回几号
        month: dateObj.getMonth() + 1,//返回月份
        year: dateObj.getFullYear()//返回年份
      }
    }
  }
}