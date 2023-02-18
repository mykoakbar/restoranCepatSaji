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
                    <form>
                        <div class="mb-3">
                            <label for="jumlah" class="form-label">Jumlah Pesanan :</label>
                            <input placeholer="masukkan jumlah pesanan kalian" type="number" class="form-control" id="jumlah">
                        </div>
                        <div class="mb-3">
                            <label for="keterangan" class="form-label">Keterangan :</label>
                            <textarea placeholder="contoh : sambalnya dipisah, nasinya setengah" type="text" class="form-control" id="keterangan"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success"><b-icon icon="cart3"></b-icon> Pesan</button>
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
    name: "BestFoodDetailView",
    components: {
        Navbar
    },
    data(){
        return{
            wadah: []
        };
    },
    methods:{
        pesenLur(data){
            this.wadah = data
        }
    },
    mounted(){
        axios
        .get("http://localhost:3000/bestProduct/"+ this.$route.params.id)
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