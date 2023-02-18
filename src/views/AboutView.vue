<template>
  <div class="container">
    <Navbar />
    <div class="text-area mt-5 text-center">
      <h1><b-icon icon="geo-alt-fill" variant="success"></b-icon> lokasi kami</h1>
    </div>
    <div class="about text-center mt-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387188.174394611!2d-74.2619341593706!3d40.69803232724826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c266decd55e925%3A0x825428bd51032323!2sChew%20The%20Fat%3A%20Bar%2C%20Lounge%2C%20and%20Grill!5e0!3m2!1sen!2sid!4v1676740783501!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>  
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "AboutView",
  components: {
    Navbar,
  }
}

</script>

<style>
.about h1 {
  text-shadow: 0px 5px 10px rgb(58, 231, 72);
}
</style>