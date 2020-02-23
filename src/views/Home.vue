<template>
<div class="home-footer-wrapper">
  <div class="home-wrapper">
      <div class="intro-text">
        <h1 class="intro-text-1">Hi! I am <span class="my-name">Khang Nguyen</span></h1>
        <h2 class="intro-text-2">I am a Software Development student<br>in Toronto, Canada.</h2>
        <div class="external-link-panel">
          <a href="https://github.com/vitokhangnguyen" target="__blank" rel="noreferrer noopener">
            <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
          </a>
          <a href="https://www.linkedin.com/in/khang-ngoc-nam-nguyen/" target="__blank" rel="noreferrer noopener">
            <font-awesome-icon :icon="['fab', 'linkedin-in']"></font-awesome-icon>
          </a>
        </div>
        <button class="main-btn" @click="goToBth645">My BTH 645
          <font-awesome-icon icon="arrow-right" class="fa-sm right-arrow"></font-awesome-icon>
        </button>
        <router-link class="last-submission-link" to="/bth645/asg1">
          Last submission: Assignment 1
        </router-link>
      </div>
      <div class="intro-image">
        <img
        class="avatar"
        src="@/assets/homepage-avatar.png"
        alt="homepage-avatar"
        />
      </div>
  </div>
  <homepage-footer></homepage-footer>
</div>
</template>

<script>
import background from '@/states/background';
import HomepageFooter from '@/components/HomepageFooter.vue';

export default {
  name: 'home',
  data() {
    return {
      background,
    };
  },
  methods: {
    goToBth645() {
      this.$router.push('bth645');
    },
  },
  created() {
    background.useImageBackground();
  },
  destroyed() {
    background.unuseImageBackground();
  },
  components: {
    HomepageFooter,
  },
};
</script>

<style scoped>
.home-footer-wrapper {
  height: 80%;
}

.home-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1em 2em;
  height: 100%;
  /* border-top: 1px rgb(255, 255, 255, 0.25) solid; */
}

.external-link-panel > * {
  display: inline-block;
  margin-right: 0.75em;
  font-size: 38px;
  color: white;
}

.intro-text {
  margin-bottom: 2em;
}

.my-name {
  font-weight: 700;
  color: rgb(228, 90, 90);
  letter-spacing: 8px
}

button.main-btn {
  display: block;
  background-color: rgb(0, 0, 0, 0);
  border: 2px solid white;
  color: white;
  height: 2.25em;
  font-size: 25px;
  padding: 0em 1em;
  margin-top: 1em;
}

.main-btn:hover {
  font-weight: bold;
  background-color: #5e3e7e;
  border-color: #5e3e7e;
}

.main-btn:focus {
  outline: none;
}

.main-btn:hover > .hidden {
  display: inline-block;
  margin-left: 3px;
}

.right-arrow {
  display: inline-block;
  margin-left: 5px;
}

.avatar {
  width: 22em;
  max-width: 100%;
  border-radius: 50%;
}

.last-submission-link {
  color: #ab5ed1;
  display: inline-block;
  margin-top: 5px;
  margin-left: 0em;
}

.last-submission-link:hover {
  color: rgb(214, 131, 255);
}
</style>
