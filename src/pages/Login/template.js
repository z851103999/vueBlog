import jwt_decode from "jwt-decode";
import request from '../../helpers/request';

window.request = request;

export default {
  name: "login",
  data() {
      var username = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空!"));
      } else {
        callback();
      }
    }
    return {
      LoginUser: {
        username:"",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "change" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");// 发送接口等待写
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
