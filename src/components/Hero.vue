<template>
  <div class="hero">
    <!-- tampilan desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1><strong>Restoran Fast Food</strong></h1>
              <h3>Ready Setiap saat</h3>
              <p>menu makanan khas dari berbagai daerah di indonesia</p>
              <router-link to="/FoodsView" class="btn btn-lg btn-success"><b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>      Pesan</router-link>
            </div> 
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.svg" width="100%">
        </div>
      </div>
    </div>
   
    <!-- tampilan mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
        <div class="col-md-6">
          <img src="../assets/images/hero.svg" width="100%">
        </div>
        <div class="col-md-6 mt-5">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1><strong>Indonesian Fast Food</strong></h1>
              <h3>Ready Setiap saat</h3>
              <p>menu makanan khas dari berbagai daerah di indonesia</p>
              <button class="btn btn-lg btn-success"><b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>      Pesan</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:  "HeroHome"
}
</script>

<style>

</style>
