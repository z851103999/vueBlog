export default {
  name: "register",
  data() {
    var password = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleFrom.checkPass !== '') {
          this.$refs.ruleFrom.validateField('checkPass');
        }
        callbrack();
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleFrom.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleFrom: {
        username: "",
        email: "",
        password: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        email: [
          { type: "email", required: true, message: "邮箱格式不正确", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "确认密码不能为空", trigger: "change" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("http://blog-server.hunger-valley.com/auth/register", this.ruleFrom).then(res => {
              // 注册成功
              this.$message({
                message: "注册成功！",
                type: "success"
              });
              // this.$router.push("/login");
            });
        } else {
          this.$message({
            message: "注册失败！",
            type: "success"
          });
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
}