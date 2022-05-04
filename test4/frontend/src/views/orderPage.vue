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
      <div class="k-boxu box">
                        <div class="k-title ti1 subtitle">
                                <p v-if="order.length == 0">ยังไม่มีการสั่งซื้อ</p>
                                <a class="button is-info" style="margin-right: 80px;" href="index.html">
                                    <span class="icon">
                                        <i class="fa-solid fa-shop"></i>
                                    </span>
                                    <span>เลือกดูสินค้า</span>
                                </a>
       </div>
        <!--v-for="(orders,i) in order[0]" :key="i"-->

        
      <div v-for="(orders,i) in order" :key="i">
               <div class="media">
                   <div class="media-left">
                       <figure class="image is-96x96">
                           <img :src="order[i].image_url1" alt="Placeholder image">
                       </figure>
                   </div>
                   <div class="media-content pt-2" v-if="order.length != 0">
                       <p class="is-5"> {{order[i].title}} </p>
                       <p class="has-text-grey-light is-6"> {{order[i].description}} </p>
                       <div style="display: flex;justify-content: space-between;">
                           <div>
                               <!-- ราคาสินค้า------------------------------------------------ -->
                               <span class="is-6 has-text-info">ราคา {{order[i].price}} บาท</span>
                               <!-- จำนวนสินค้า----------------------------------------------- -->
                               <span> จำนวน {{order[i].quantity}} เล่ม</span>
                               <br>
                                 <!-- ราคารวม----------------------------------------------- -->
                               <span class="is-6 has-text-success">ราคารวม {{order[i].price_sum}} บาท</span>
                           </div>
                           <div>
                               <!-- icon รูปถังขยะ------------------------------------------- -->
                               <span class="icon mr-2" key="false" @click="removeFromCart()">
                                   ยกเลิก
                                   <i class="far fa-trash-alt"></i>
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
               <hr>
               
      </div>
       <br><br><br>
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
export default {
  name: "detailPage",
  data() {
    return {
      order: [],
      user: [],
    };
  },
  mounted() {
    const userId = this.$route.params.userId;
    //ดึง order ทั้งหมดของ user นี้
     axios.get(`http://localhost:3000/order/item/${userId}`).then((response) => {
        this.order = (response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      //ดึงข้อมูล user
      axios.get(`http://localhost:3000/users/${userId}`).then((response) => {
      console.log(response.data);
      this.user = response.data[0];
    });
  },
  methods: {
    
                removeFromCart() {
                    var r=confirm("คณต้องการยกเลิกออเดอร์หรือไม่");
                    if (r==true)
                    {
                        axios.delete(`http://localhost:3000/order/delete/9`).then((response) => {
                        console.log(response.data);
                        });
                        
                    }
                    else
                    {
                    alert("ไม่มีการเปลี่ยนแปลง");
                    }
                },
            },
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