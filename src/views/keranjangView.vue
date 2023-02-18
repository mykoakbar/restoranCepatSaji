<template>
    <div class="keranjang">
        <Navbar :updateKeranjang="wadah"/>
        <div class="container">
            <h1>Keranjang Anda</h1>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Nama Menu</th>
                            <th scope="col">Keterangan</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Total Harga</th>
                            <th scope="col">Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(keranjang, index) in wadah" :key="keranjang.id">
                            <th>{{ index +1 }}</th>
                            <td> <img :src="'../images/' + keranjang.produk.gambar" class="img-fluid shadow" width="250"></td>
                            <td>{{ keranjang.produk.nama }}</td>
                            <td>{{ keranjang.keterangan_pesanan }}</td>
                            <td>{{ keranjang.jumlah_pesanan }}</td>
                            <td>Rp. {{ keranjang.produk.harga }}</td>
                            <td>Rp. {{ keranjang.produk.harga*keranjang.jumlah_pesanan }}</td>
                            <td class="text-danger">
                                <button class="btn btn-danger" @click="hapusPesanan(keranjang.id)"><b-icon-trash></b-icon-trash></button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" align="right">
                                <strong>Total Harga</strong>
                            </td>
                            <td>
                                <strong>Rp. {{ totalHarga }}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row justify-content-center pb-4">
                <div class="col-md-4">
                    <form class="mt-4" v-on:submit.prevent>
                        <div class="form-group">
                            <label for="noMeja">Nomer Meja</label>
                            <input v-model="cekot.noMeja" type="number" class="form-control" placeholder="masukkan nomer meja">
                        </div>
                        <div class="form-group">
                            <label for="namaPemesan">Nama</label>
                            <input v-model="cekot.namaPemesan" type="text" class="form-control" placeholder="masukkan nama pemesan">
                        </div>
                            <button @click="kirimPesanan" type="submit" class="btn btn-success float-right"><b-icon icon="cart-3"></b-icon> Pesan</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
    name: "keranjangView",
    components: {
       Navbar 
    },
    data(){
        return{
            wadah: [],
            cekot: { },
        };
    },
    methods:{
        ambilPesanan(data){
            this.wadah = data
        },
        hapusPesanan(id){
            axios
            .delete("http://localhost:3000/keranjang/" + id)
            .then(() => {
                this.$toast.error('Pesanan Berhasil Dihapus', {
                        type: 'error',
                        position: 'bottom-right',
                        duration: 3000,
                        dismissible: true
                    })
            });
            axios
            .get("http://localhost:3000/keranjang")
            .then((response) => this.ambilPesanan(response.data))
            .catch((error) => console.log("error lurd", error))
        },
        kirimPesanan(){
            if(this.cekot.noMeja && this.cekot.namaPemesan) {
                //"produk" adalah wadah yang didefinisikan di halaman foodview
                this.cekot.produk = this.wadah;
                axios
                .post("http://localhost:3000/pesanan", this.cekot)
                .then(() => {
                    //hapus keranjang setelah chechout
                    this.wadah.map(function(item) {
                        return axios
                        .delete("http://localhost:3000/keranjang/" + item.id)
                        .catch((error) => console.log(error))
                    }
                    )
                    this.$router.push({path: "/pesananBerhasil"})
                    this.$toast.success('berhasil checkout', {
                            type: 'success',
                            position: 'bottom-right',
                            duration: 3000,
                            dismissible: true
                        });
                })
                .catch((error) => console.log(error, "error lurd"))
            } else {
                this.$toast.error('masukkan nama dan nomer meja', {
                            type: 'error',
                            position: 'bottom-right',
                            duration: 3000,
                            dismissible: true
                        })
            }
        }
    },
    async mounted(){
        axios
        .get("http://localhost:3000/keranjang")
        .then((response) => this.ambilPesanan(response.data))
        .catch((error) => console.log("error lurd", error))
    },
    computed: {
        totalHarga(){
            return this.wadah.reduce(function(items, data){
                return items + data.produk.harga*data.jumlah_pesanan;
            }, 0);
        }
    }

}
</script>

<style>
.table img{
  width: 16rem;
  border-radius: 15px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);;
}
</style>