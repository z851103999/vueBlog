import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致"))
      } else {
        callback()
      }
    };

    return {
      registerUser: {
        password: '',
        checkPass: '',
        username: ''
      },
      rules: {
        username: [{
          required: true,
          message: "用户名不能为空",
          trigger: 'change'
        },
        {
          min: 2,
          max: 30,
          message: "长度在2到30个字符",
          trigger: "blur"
        }
        ],
        password: [{
          required: true,
          message: "密码不能为空",
          trigger: "blur"
        },
        {
          min: 6,
          max: 30,
          message: "长度在 6 到 30 个字符",
          trigger: "blur"
        }
        ],
        checkPass: [{
          required: true,
          message: "确认密码不能为空",
          trigger: "blur"
        },
        {
          min: 6,
          max: 30,
          message: "确认密码不能为空",
          trigger: "blur"
        },
        {
          validator: validatePass2,
          trigger: "blur"
        }
        ]
      }
    };
  },
  methods: {
    ...mapActions(['register']),
    onRegister() {
      this.register(this.registerUser)
        .then(() => {
          this.$router.push({ path: '/' })
        })
    }
  }

}