import blog from '@/api/blog'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            blog: [],
            page: 1,
            total: 0
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getIndexBlogsByUserId(this.user.id, {page: this.page})
            .then(res => {
                console.log(res)
                this.page = res.page
                this.total = res.total
                this.blogs = res.blogs
            })
    },
    methods: {
        onPageChange(newpage) {
            blog.getIndexBlogsByUserId(this.user.id, {page: newPage}).then(res => {
                // console.log(res)
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$route.push({path: "/my", query: {page: newpage}})
            })
        },
        async onDelete(blogId) {
            await this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonClass: '取消',
                type: 'warning'
            })
            await blog.deleteBlog({blogId})
            this.$message.success('删除成功')
            this.blogs = this.blogs.filter(blog => blog.id != blogId)
        },
        splitDate(detaStr) {
            let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
            return {
                data:dataOb.getDate(),
                month:dateObj.gerMonth() + 1,
                year:dataObj.getFullYear()
            };
        }
    }
}