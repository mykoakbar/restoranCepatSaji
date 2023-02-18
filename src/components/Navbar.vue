<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">FastFoods</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/FoodsView">Foods</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/AboutView">About</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/KeranjangView">
                            Keranjang 
                            <b-icon-bag></b-icon-bag>
                            <span class="badge badge-success ml-2">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanan.length }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'NavBar',
    data(){
        return{
            jumlah_pesanan: []
        }
    },
    props: ['updateKeranjang'],
    methods:{
        setJumlahPesanan(data){
            this.jumlah_pesanan = data
        }
    },
    async mounted(){
        axios
        .get("http://localhost:3000/keranjang")
        .then((response) => this.setJumlahPesanan(response.data))
        .catch((error) => console.log("error lurd", error))
    }
}
</script>

<style>

</style>