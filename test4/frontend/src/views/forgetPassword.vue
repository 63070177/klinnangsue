<template>
  <div>
    <div class="gbox">
      <div class="glogo-text">
        <span>Klinnangsue</span>
        <span>ร้านกลิ่นหนังสือ</span>
      </div>
    </div>
    <div id="app" class="k-box box">
      <div class="k-title title">ลืมรหัสผ่าน</div>
      <div class="k-small is-small">
        ลืมรหัสผ่าน? กรุณากรอกชื่อผู้ใช้งาน หรืออีเมล
        เพื่อคุณจะได้รับลิงก์เพื่อสร้างรหัสผ่านใหม่ทางอีเมล
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
        <label class="label">รหัสผ่านใหม่ <font color="red">*</font></label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="รหัสผ่านใหม่"
            :class="{ 'is-danger': error.password }"
            v-model="password"
            @input="validatePassword()"
          />
          <span class="has-text-danger">{{ error.password }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <label class="label"
          >ยืนยันรหัสผ่านใหม่ <font color="red">*</font></label
        >
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            :class="{ 'is-danger': error.confirmpassword }"
            v-model="confirmpassword"
            @input="validateConfirmpassword()"
          />
          <span class="has-text-danger">{{ error.confirmpassword }}</span>
        </p>
      </div>
      <div class="k-fe field">
        <p class="control">
          <button class="k-bu button" @click="changePassword()">เปลี่ยนรหัสผ่าน</button>
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
  name: "forgetPassword",
  data() {
    return {
      username: "",
      password: "",
      confirmpassword: "",
      error: {
        username: "",
        password: "",
        confirmpassword: "",
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
    validateConfirmpassword() {
      if (this.confirmpassword === "") {
        this.error.confirmpassword = "กรุณายืนยันรหัสผ่าน";
        return;
      }

      if (this.confirmpassword != this.password) {
        this.error.confirmpassword = "ยืนยันรหัสผ่านไม่ถูกต้อง";
        return;
      }

      this.error.confirmpassword = "";
    },
    changePassword() {
        const data = {
            username: this.username,
            confirmpassword: this.confirmpassword
        }
        axios.put(`http://localhost:3000/user/forgetPassword`, data).then((response) => {
            console.log(response)
            this.$router.push({ path: "/loginPage" });
        }).catch((err) => {
          console.log(err)
          alert('กรุณากรอกข้อมูลใหม่ เนื่องจากชื่อผู้ใช้งานหรือ รหัสผ่านไม่ถูกต้อง')
      });
    }
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