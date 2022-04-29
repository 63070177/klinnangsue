<template>
  <div>
    <div class="gbox">
      <div class="glogo-text">
        <span>K l i n n a n g s u e</span>
        <span>ร้านกลิ่นหนังสือ</span>
      </div>
    </div>
    <div class="box k-box">
      <div class="k-title title">เข้าสู่ระบบ</div>
      <div class="k-fe field">
        <label class="label"
          >ชื่อผู้ใช้งาน<font color="red">*</font></label
        >
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            v-model="username"
            name="username"
            placeholder="ชื่อผู้ใช้งาน"
          />
        </p>
      </div>
      <div class="k-fe field">
        <label class="label">รหัสผ่าน <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input class="input" v-model="password" name="password" type="password" placeholder="รหัสผ่าน" />
        </p>
      </div>
      <label class="checkbox">
        <input class="k-check" type="checkbox" />
        จำฉันไว้
      </label>
      <div class="k-fe field">
        <p class="control">
          <button class="k-bu button" @click="submit()">เข้าสู่ระบบ</button>
        </p>
      </div>
      <div class="level">
        <div class="level-left">
          <a class="k-pass" href="./forgetPassword">ลืมรหัสผ่าน</a>
        </div>
        <div class="level-right">
          <a class="k-mem" href="./signupPage">สมัครสมาชิก</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default ({
  name: "loginPage",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit(){
      const data = {
        username: this.username,
        password: this.password,
      }
    axios.post(`http://localhost:3000/user/login`, data).then((response) => {
      console.log(response.data)
      this.$router.push(`/homePage/${response.data.user_id}`)
    }).catch((err) => {
      alert(" ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง")
      console.log(err)
      })}
  }
});
</script>

<style>

.glogo-text{
    letter-spacing: 15;
    font-size: 2.5rem;
    color: white;
}
.gbox{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-color: #6d7352;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
    margin-bottom: 80px;
}
.k-sec {
    background-color: #6A7150;
    margin-top: 100%;
}


.k-butt {
    background-color: #6A7150;
    color: white;
    position: relative;
}

.k-butt2 {
    background-color: #6A7150;
    color: white;
    font-size: 1.2rem;
}

.k-im-item {
    margin-top: 20px;
    margin-right: 5px;
    margin-bottom: 20px;
    font-size: 30;
}

.k-im {
    margin-right: 15px;
}

.k-box {
    width: 600px;
    margin: auto;
    margin-top: 50px;
}

.k-check {
    margin-bottom: 10px;
}

.k-pass {
    color: #6A7150;
}

.k-mem {
    color: #6A7150;
}

.k-title {
    color: #6A7150;
}

.k-bu {
    background-color: #6A7150;
    color: white;
}

.k-small {
    color: #6A7150;
    margin-bottom: 10px;
}

.ti2 {
    margin-top: 100px;
}

</style>