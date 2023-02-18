<template>
    <div class="row">
        <div class="col-lg-4">
            <b-card style="border-radius: 30px;" bg-variant="light" text-variant="dark" :title="harga.nama">
            <b-card-text>
                {{harga.harga}}
            </b-card-text>
            <b-button href="#" variant="primary">detail</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {    
    name: "cardHarga",
    props: ["harga"],
}
</script>

<style>

</style>