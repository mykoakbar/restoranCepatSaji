<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/FoodsView" class="btn btn-success float-right"><b-icon icon="eye"></b-icon> Lihat Semua</router-link>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-mb-4 mt-4" style="margin-left: 50px;" v-for="product in produk" :key="product.id">
          <cardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import cardProduct from '@/components/cardProduct.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    cardProduct
  },
  data() {
    return {
      produk: [],
    };
  },
  methods: {
    ambilProduk(data) {
      this.produk = data;
    },
  },
  async mounted(){
    axios
      .get("http://localhost:3000/bestProduct")
      .then((response) => this.ambilProduk(response.data))
      .catch((error) => console.log("errorr: ", error))
  },
};
</script>
