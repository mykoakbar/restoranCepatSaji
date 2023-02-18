<template>
  <div class="row">
    <div>
      <b-card
        :title="product.nama"
        :img-src="'./images/' + product.gambar"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <p>Harga : Rp.{{product.harga}}</p>
        </b-card-text>
        <router-link :to="'/foodsView/' + product.id" class="btn btn-success" variant="primary"><b-icon icon="cart3"></b-icon>  Pesan</router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
    name: "cardProduct",
    props: ["product"]
};
</script>

<style>
.card{
  width: 16rem;
  border-radius: 15px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);;
}
.card img{
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>