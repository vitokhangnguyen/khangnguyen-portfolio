<template>
  <div id="app" :class="[background.isUsingImage() ? 'image-background' : '']">
    <Navbar />
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

#app {
  color: white !important;
  height: 100%;
}

body {
  background-color: rgb(4, 4, 51) !important;
}

.image-background {
  background-image:  linear-gradient(rgba(4,4,41,0.7), rgba(4,4,41,0.7)),
    url("../src/assets/homepage-background.png");
  background-size: cover;
}

/* .image-background > .color-overlay {
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  background: rgb(4, 4, 51, 0.75);
} */
</style>
