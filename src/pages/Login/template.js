import { mapActions } from 'vuex'

// export default {
//   data () {
//     return {
//       username: '',
//       password: ''
//     }
//   },
//   methods: {
//  ...mapActions(['login']),
//     onLogin(){
//       this.login({username:this.username,password:this.password})
//       .then(() =>{
//         this.$router.push({path:this.$router.query.redirect || '/'})
//       })
//     }
//   }
// }

export default {
  name: 'register',
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.loginUser.password) {
        callback(new Error("两次输入密码不一致"))
      } else {
        callback()
      }
    };

    return {
      loginUser: { password: '', username: '' },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: 'change' },
          { min: 2, max: 30, message: "长度在2到30个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: { 
    ...mapActions(['login']),
    onLogin() {
      this.login(this.loginUser)
        .then(() => {
          this.$router.push({ path:this.$router.query.redirect || '/' })
        })
    }
  }

}