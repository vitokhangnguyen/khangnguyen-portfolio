<template>
  <div id="app" :class="[background.isUsingImage() ? 'image-background' : '']">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
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
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500,600,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");

html, body {
  height: 100%;
}

@media (max-width: 768px) {
  body {
    height: auto;
  }
}

body {
  /* background-color: rgb(4, 4, 51) !important; */
  background-color: rgb(18, 19, 76) !important;
}
</style>

<style scoped>

#app {
  font-family: 'Open Sans', sans-serif;
  color: white !important;
  height: 100%;
}

.image-background {
  background-image: linear-gradient(rgba(4,4,41,0.5), rgba(4,4,41,0.5)),
    url("assets/homepage-background.jpg");
  background-size: cover;
}
</style>
