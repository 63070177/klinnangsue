<template>
  <div>
    <div class="gbox">
      <div class="glogo-text">
        <span>Klinnangsue</span>
        <span>ร้านกลิ่นหนังสือ</span>
      </div>
    </div>
    <div id="app" class="k-box box">
      <div class="k-title title">สมัครสมาชิก</div>
      <div class="k-fe field">
        <label class="label">อีเมล <font color="red">*</font></label>
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="อีเมล"
            :class="{ 'is-danger': error.email }"
            v-model="email"
            @input="validateEmail()"
          />
          <span class="has-text-danger">{{ error.email }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <label class="label">รหัสผ่าน <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="รหัสผ่าน"
            :class="{ 'is-danger': error.password }"
            v-model="password"
            @input="validatePassword()"
          />
          <span class="has-text-danger">{{ error.password }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <label class="label">ชื่อผู้ใช้งาน <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="username"
            placeholder="ชื่อผู้ใช้งาน"
            :class="{ 'is-danger': error.username }"
            v-model="username"
            @input="validateUsername()"
          />
          <span class="has-text-danger">{{ error.username }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <label class="label">ชื่อจริง <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="first_name"
            placeholder="ชื่อจริง"
            :class="{ 'is-danger': error.firstname }"
            v-model="firstname"
            @input="validateFirstname()"
          />
          <span class="has-text-danger">{{ error.firstname }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <label class="label">นามสกุล <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="last_name"
            placeholder="นามสกุล"
            :class="{ 'is-danger': error.lastname }"
            v-model="lastname"
            @input="validateLastname()"
          />
          <span class="has-text-danger">{{ error.lastname }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <label class="label">เบอร์โทรศัพท์ <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="phone"
            placeholder="เบอร์โทรศัพท์"
            :class="{ 'is-danger': error.phone }"
            name="phone"
            v-model="phone"
            @input="validatePhone()"
          />
          <span class="has-text-danger">{{ error.phone }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <p class="control">
          <button class="k-bu button" @click="signup()">ลงทะเบียน</button>
        </p>
      </div>
      <div class="level">
        <div class="level-left">
          <a class="k-pass" href="./loginPage">เข้าสู่ระบบ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signupPage",
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      firstname: "",
      lastname: "",
      email: "",
      error: {
        username: "",
        password: "",
        phone: "",
        firstname: "",
        lastname: "",
        email: "",
      },
    };
  },
  methods: {
    validateUsername() {
      if (this.username === "") {
        this.error.username = "กรุณากรอกชื่อผู้ใช้งาน";
        return;
      }
      this.error.username = "";
    },
    validatePassword() {
      if (this.password === "") {
        this.error.password = "กรุณากรอกรหัสผ่าน";
        return;
      }

      if (this.password.length < 8) {
        this.error.password = "รหัสผ่านห้ามน้อยกว่า 8 ตัวอักษร";
        return;
      }

      if (!isNaN(this.password)) {
        this.error.password = "ห้ามเป็นตัวเลขทั้งหมด";
        return;
      }

      this.error.password = "";
    },
    validatePhone() {
      if (isNaN(this.phone) || this.phone.length != 10) {
        this.error.phone = "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก";
        return;
      }

      this.error.phone = "";
    },
    validateFirstname() {
      if (this.firstname === "") {
        this.error.firstname = "กรุณากรอกชื่อจริง";
        return;
      }
      this.error.firstname = "";
    },
    validateLastname() {
      if (this.lastname === "") {
        this.error.lastname = "กรุณากรอกนามสกุล";
        return;
      }
      this.error.lastname = "";
    },
    validateEmail() {
      if (this.email === "") {
        this.error.email = "กรุณากรอกอีเมล";
        return;
      }

      if (this.email.search("@") <= 0) {
        this.error.email = "กรุณากรอกอีเมล";
        return;
      }
      this.error.email = "";
    },
    signup() {
      const data = {
        username: this.username,
        password: this.password,
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
      };
      axios.post(`http://localhost:3000/user/signup`, data).then((response) => {
        console.log(response);
        this.$router.push({ path: "/loginPage" });
      }).catch((err) => {
          console.log(err)
          alert('กรุณากรอกข้อมูลใหม่ เนื่องจากอีเมล ชื่อผู้ใช้งานหรือ รหัสผ่านซ้ำ')
      });
    },
  },
};
</script>

<style>
.glogo-text {
  letter-spacing: 15;
  font-size: 2.5rem;
  color: white;
}
.gbox {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #6d7352;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
}
.k-sec {
  background-color: #6a7150;
  margin-top: 100%;
}

.k-butt {
  background-color: #6a7150;
  color: white;
  position: relative;
}

.k-butt2 {
  background-color: #6a7150;
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
  margin-top: 30px;
}

.k-check {
  margin-bottom: 10px;
}

.k-pass {
  color: #6a7150;
}

.k-mem {
  color: #6a7150;
}

.k-title {
  color: #6a7150;
}

.k-bu {
  background-color: #6a7150;
  color: white;
}

.k-small {
  color: #6a7150;
  margin-bottom: 10px;
}

.ti2 {
  margin-top: 100px;
}
</style>