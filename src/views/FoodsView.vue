<template>
  <div class="container">
    <Navbar />
    <h1>
      Menu <strong>makanan </strong> khas daerah yang tersebar di seluruh Indonesia
    </h1>
      <nav class="navbar bg-body-tertiary">
          <div class="input-group">
            <input v-model="Cari" 
            type="text" class="form-control" placeholder="Cari Makanan yang kamu suka disini" aria-label="Cari" aria-describedby="basic-addon1"
            @keyup="cariProduk">
            <span class="input-group-text bg-success" id="basic-addon1"><b-icon icon="search" style="color: white;"></b-icon></span>
          </div>
      </nav>
    <div class="row mb-5">
        <div class="col-mb-4 mt-4" style="margin-left: 50px;" v-for="product in produk" :key="product.id">
          <cardProduct :product="product"/>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
import cardProduct from '@/components/cardProduct.vue'

export default {
  name : "FoodsView",
  components: {
      Navbar,
      cardProduct
    },
    data() {
      return {
        produk: [],
        Cari: [],
      };
    },
    methods: {
      ambilProduk(data) {
        this.produk = data;
      },
      cariProduk() {
        axios
        .get("http://localhost:3000/product?q=" + this.Cari)
        .then((response) => this.ambilProduk(response.data))
        .catch((error) => console.log("errorr: ", error))
      }
    },
    async mounted(){
      axios
        .get("http://localhost:3000/product")
        .then((response) => this.ambilProduk(response.data))
        .catch((error) => console.log("errorr: ", error))
    },
}
</script>

<style>

</style>