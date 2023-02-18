<template>
  <div class="pesananBerhasil">
    <navbar />
    <div class="container">
        <div class="col text-center mt-5">
            <div class="col-md-12 mt-3">
                <img src="../assets/images/pesanan_berhasil.svg" width="250" alt="">
            </div>
            <div class="col-md-12 mt-5">
                <h2>Pesanan akan segera di proses</h2>
            </div>
            <div class="col-md-12">
                <h4>Mohon menunggu menu hidangan yang sudah anda pesan, <strong>selamat menuggu</strong></h4>
            </div>
            <div class="col-md-12 mt-4">
                <router-link to="/FoodsView"><button class="btn btn-success">Kembali</button></router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: "pesananBerhasil",
    components: {
        Navbar
    }
}
</script>

<style>

</style>