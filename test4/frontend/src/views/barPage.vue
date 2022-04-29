<template>
<div>
    <nav
      class="navbar is-transparent"
      style="background-color: #6a7150; color: white"
    >
      <div class="navbar-brand">
        <div>
          <img
            class="logo"
            src="../klinnangsue_logo.svg"
            width="200"
            height="100"
          />
          <div class="logo-text">
            <span>Klinnangsue<br />ร้านกลิ่นหนังสือ</span>
          </div>
        </div>
      </div>
      <div class="navbar-start">
        <div class="navbar-item" style="margin-left: 40px">
          <a
            class="navbar-item g-navitem"
            style="margin-right: 50px; margin-left: 10px"
          >
            Book
          </a>
          <div class="navbar-item">
            <a class="navbar-item g-navitem"> Blind date with a book </a>
          </div>
        </div>
      </div>
      <div class="navbar-end" style="margin-right: 100px;">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fa-solid fa-user"></i>
                </span>
                <span>Member</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>

    
</div>
</template>

<script>
export default {
    name: "barPage",
    data() {
        return {

        }
    },
}
</script>

<style>
body {
  background-color: #f2e0c3;
}

footer {
  background-color: #6d7352;
}

.g-navitem{
  font-size: 2rem;
  color: white;
}

.clicktoblind {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
  background-image: url("../founder.jpg");
  background-size: cover;
}

.boxtoblind {
  padding: 15px;
  position: absolute;
  z-index: 1;
  width: 400px;
  background-color: #6d7352;
  color: white;
  right: 50px;
  top: 100px;
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 2rem;
}

.gbuttom {
  margin-top: 30px;
  color: white;
  background-color: #6d7352;
  width: 100%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.booktype {
  padding: 30px;
  font-size: 2rem;
  margin-left: 60px;
}

.index {
  display: block;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
}

.logo {
  width: 150px;
  padding-left: 60px;
  padding-top: 20px;
  margin-right: 30px;
}

.logo-text {
  position: relative;
  padding-left: 40px;
  text-align: center;
  letter-spacing: 3px;
}

.k-level {
  padding-top: 50px;
  margin-top: 50px;
  padding-right: 100px;
}

.k-im-item {
  font-size: 2rem;
}

.logo-text2 {
  letter-spacing: 15px;
  margin-top: 40px;
  margin-left: 100px;
  font-size: 2.5rem;
  color: #6d7352;
}

.logo2 {
  width: 150px;
  padding-left: 60px;
  padding-top: 20px;
  margin-right: 30px;
  margin-left: 100px;
}

.linkinP {
  color: #6d7352;
}

.linkinP:hover {
  color: black;
}

.ubox {
  width: 300px;
  margin-top: 50px;
}

.gbookstore {
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background-color: #bf9772;
  text-align: center;
  border: none;
  border-radius: 30px;
}

.glogo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 200px;
}

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
  padding-bottom: 10px;
}

.gbookstore2 {
  width: 250px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background-color: #bf9772;
  text-align: center;
  border: none;
  border-radius: 30px;
}

.gbutton {
  margin-top: 30px;
  text-align: center;
  background-color: none;
}

.gbutt {
  border: 2px solid #6d7352;
  font-size: 1.2rem;
  background-color: #f2e0c3;
  color: #6d7352;
  border-radius: 20px;
  width: 300px;
  height: 50px;
}
</style>