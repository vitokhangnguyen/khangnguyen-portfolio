<template>
  <div id="app" :class="[background.isUsingImage() ? 'image-background' : '']">
    <navbar />
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MyFooter from '@/components/Footer.vue';

import background from '@/states/background';

export default {
  name: 'home',
  data() {
    return {
      background,
    };
  },
  components: {
    Navbar,
    MyFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500,600,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");

html, body {
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  body {
    height: auto;
  }
}

body {
  /* background-color: rgb(18, 19, 76) !important; */
  background-color: rgb(14, 30, 80) !important;
}
</style>

<style scoped>

#app {
  font-family: 'Open Sans', sans-serif;
  color: white !important;
  height: 100%;
}

.image-background {
  background-image: linear-gradient(rgba(4, 4, 32, 0.75), rgba(4, 4, 32, 0.75)),
    url("assets/homepage-background.jpg");
  background-size: cover;
}
</style>
