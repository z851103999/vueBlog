import blog from '@/api/blog.js'


export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },

  created() {
    this.page = parseInt(this.$route.query.page) || 1  //如果没有设置页数就为1否则获取页数
    blog.getIndexBlogs({ page: this.page }).then(res => {
      console.log(res)
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },

  methods: {
    onPageChange(newPage) {
      console.log(newPage)
      blog.getIndexBlogs({ page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({ path: '/', query: { page: newPage}})
      })
    }
  }
}