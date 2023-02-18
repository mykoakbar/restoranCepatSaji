<template>
    <div class="food-detail">
        <Navbar />
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-6 images-food-detail">
                    <img :src="'../images/' + wadah.gambar" class="img-fluid shadow">
                </div>
                <div class="col-md-6">
                    <h2><strong>{{ wadah.nama }}</strong></h2>
                    <hr />
                    <h3>Harga: <strong>Rp. {{ wadah.harga }}</strong></h3>
                    <form v-on:submit.prevent>
                        <div class="mb-3">
                            <label for="jumlah" class="form-label">Jumlah Pesanan :</label>
                            <input v-model="pesanan.jumlah_pesanan" placeholer="masukkan jumlah pesanan kalian" type="number" class="form-control" id="jumlah">
                        </div>
                        <div class="mb-3">
                            <label for="keterangan" class="form-label">Keterangan :</label>
                            <textarea v-model="pesanan.keterangan_pesanan" placeholder="contoh : sambalnya dipisah, nasinya setengah" type="text" class="form-control" id="keterangan"></textarea>
                        </div>
                        <button @click="pemesanan" type="submit" class="btn btn-success"><b-icon icon="cart3"></b-icon> Pesan</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios';

export default {
    name: "foodDetail",
    components: {
        Navbar
    },
    data(){
        return{
            wadah: {},
            pesanan: {}
        };
    },
    methods:{
        pesenLur(data){
            this.wadah = data
        },
        pemesanan(){
            if(this.pesanan.jumlah_pesanan){
                //"produk" adalah wadah yang didefinisikan di halaman foodview
                this.pesanan.produk = this.wadah;
            axios
                .post("http://localhost:3000/keranjang", this.pesanan)
                .then(() => {
                    this.$router.push({ path: "/keranjangView"})
                    this.$toast.success('Pun Mlebet Keranjang Lur', {
                        type: 'success',
                        position: 'bottom-right',
                        duration: 3000,
                        dismissible: true
                    })
                })
                .catch((error) => console.log("ndak Masuk Lur", error))
            } else {
                this.$toast.error('Jumlah Pesanan e Kelintu Lur', {
                        type: 'error',
                        position: 'bottom-right',
                        duration: 3000,
                        dismissible: true
                    })
            }
        }
    },
    mounted(){
        axios
        .get("http://localhost:3000/product/"+ this.$route.params.id)
        .then((response) => this.pesenLur(response.data))
        .catch((error) => console.log("error lur : ", error))
    }
}
</script>

<style>
.images-food-detail img{
    border-radius: 30px;
    box-shadow: 5px 5px 11px 4px rgb(80, 80, 80);
}
</style>