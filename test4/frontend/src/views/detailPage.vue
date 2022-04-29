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
              <a class="button is-primary" style="font-size: 1.5rem">
                <span class="icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" style="font-size: 1.5rem">
                <router-link :to="{path:`/detailProfile/${user.user_id}`}">
                  <span class="icon">
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <span
                    >Hello, <b>{{ user.username }}</b></span
                  >
                </router-link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="k-box box">
        <div class="columns" style="gap: 2rem">
          <div class="column">
            <ColorfulSlider :arrows="true" style="height: 600px">
              <Slide><img :src="book.image_url1" alt="" /> </Slide>
              <Slide><img :src="book.image_url2" alt="" /> </Slide>
            </ColorfulSlider>
          </div>
          <div class="column">
            <button class="k-bu k-bu-1 button">{{ book.name }}</button>
            <div class="k-title title">{{ book.title }}</div>
            <div class="k-fe field">
              <label class="label">{{ book.author }} </label>
            </div>
            <div class="k-box-2 box">
              <div class="k-fe field">
                <label class="k-la label">{{ book.price }}฿ </label>
                <div class="k-small is-small">
                  มีสินค้าอยู่ {{ book.unit }} เล่ม
                </div>
                <p class="control has-icons-left has-icons-right">
                  <input class="k-in input" type="email" placeholder="" />
                </p>
                <button class="k-bu k-bu-2 button">หยิบใส่ตะกร้า</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="k-box-3 box">เนื้อเรื่องย่อ : {{ book.description }}</div>
      <div class="k-box-4 box">
        <div class="content is-normal">
          <h3 class="k-la-2 label">ข้อมูลหนังสือ</h3>
        </div>
        <div class="content is-normal">
          <h4 class="k-la-3 label">{{ book.title }}</h4>
        </div>
        <div class="k-small is-small">ผู้เขียน: {{ book.alias }}</div>
        <div class="k-small is-small">สำนักพิมพ์: {{ book.pub_name }}</div>
        <div class="k-small is-small">ISBN: {{ book.isbn_num }}</div>
        <div class="k-small is-small">
          Barcode: <img :src="book.barcode" alt="" />
        </div>
      </div>
    </div>

    <footer>
      <nav class="level k-level">
        <div class="level-item has-text-centered">
          <div>
            <p style="letter-spacing: 5" class="title has-text-white">
              Klinnangsue
            </p>
            <p style="letter-spacing: 5" class="title has-text-white">
              ร้านกลิ่นหนังสือ
            </p>
          </div>
        </div>
        <p class="level-item has-text-centered">
          <a class="link is-info has-text-white">ร้านหนังสือ</a>
        </p>
        <p class="level-item has-text-centered">
          <a class="link is-info has-text-white">แจ้งการโอนเงิน</a>
        </p>
        <p class="level-item has-text-centered">
          <a class="link is-info has-text-white">รู้จักเรา</a>
        </p>
        <p class="level-item has-text-centered">
          <a class="link is-info has-text-white">ติดต่อเรา</a>
        </p>
      </nav>

      <!-- Right side -->
      <div class="level-right" style="padding-right: 100px">
        <p class="level-item">
          <strong class="has-text-white">ติดตามข่าว ร้านกลิ่นหนังสือ</strong>
        </p>
      </div>
      <div class="level-right" style="padding-right: 100px">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="EMAIL ADDRESS" />
            </p>
            <p class="control">
              <button class="button">SUBSCRIBE</button>
            </p>
          </div>
        </div>
      </div>

      <div class="level-right" style="padding-right: 100px">
        <div class="k-im-item">
          <i class="fa-brands fa-facebook"></i>
        </div>
        <div class="k-im-item">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="k-im-item">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>

      <div class="level-right" style="padding-right: 100px">
        <p class="level-item">
          <a class="has-text-white">นโยบายความเป็นส่วนตัว</a>
        </p>
        <p class="level-item">
          <a class="has-text-white">นโยบายการส่งสินค้า</a>
        </p>
        <p class="level-item"><a class="has-text-white">นโยบายการคืนเงิน</a></p>
      </div>

      <p class="level-left" style="padding-left: 50px; padding-bottom: 20px">
        <a class="link is-info has-text-white"
          >Copyright©2020 Klinnangusue, All Rights Reserved.</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { ColorfulSlider, Slide } from "vue-colorful-slider";
export default {
  name: "detailPage",
  components: {
    ColorfulSlider,
    Slide,
  },
  data() {
    return {
      book: [],
      user: [],
    };
  },
  mounted() {
    const bookId = this.$route.params.bookId;
    const userId = this.$route.params.userId;
    axios
      .get(`http://localhost:3000/books/${bookId}`)
      .then((response) => {
        this.book = response.data[0];
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get(`http://localhost:3000/users/${userId}`).then((response) => {
      console.log(response.data);
      this.user = response.data[0];
    });
  },
  method: {},
};
</script>

<style>
.g-navitem{
  font-size: 2rem;
  color: white;
}

.k-bu{
  padding: 5px;
  margin-bottom: 10px;
}

.k-butt {
  background-color: #6a7150;
  color: white;
  position: relative;
}

.k-la{
  font-size: 1.5rem;
}

.k-box {
  width: auto;
  height: 700px;
  margin: auto;
  margin-top: 50px;
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
  font-size: 1.1rem;
}

.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}

.k-box-3 {
  font-size: 1.2rem;
}

.logo{
    width: 150px; 
    padding-left: 60px; 
    padding-top: 20px;
    margin-right: 30px;
}

.logo-text{
    position: relative; 
    padding-left: 40px; 
    text-align: center; 
    letter-spacing: 3px;
}
</style>