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
  height: 100vh;
}

body {
  background-color: rgb(4, 4, 51) !important;
}
</style>

<style scoped>
#app {
  font-family: 'Open Sans', sans-serif;
  color: white !important;
  height: 100%;
}

.image-background {
  background-image:  linear-gradient(rgba(4,4,41,0.7), rgba(4,4,41,0.7)),
    url("assets/homepage-background.png");
  background-size: cover;
}
</style>
