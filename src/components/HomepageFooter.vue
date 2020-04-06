<template>
<div>
  <footer :class="[hidden ? 'disappear' : '']">
    <font-awesome-icon
    @click="setFooterVisibility(false)"
    icon="times-circle"
    class="close-btn"></font-awesome-icon>
    <p class="last-modified">This site was last modified on {{ lastModifiedTimestamp }}.</p>
    <hr class="divider" />
    <p class="student-oath">"I declare that this is wholly my own work in accordance with
  Seneca Academic Policy. No part of this work has been copied
  manually or electronically from any other source (including web
  sites) or distributed to other students."</p>
    <span class="copyright">&copy; 2020, Khang Nguyen. Powered by
      <a href="https://vuejs.org/" target="__blank" rel="noreferrer noopener">Vue.js</a>.
    </span>
  </footer>
  <font-awesome-icon
  @click="toggleFooter"
  icon="heart"
  class="open-btn"></font-awesome-icon>
</div>
</template>

<script>
export default {
  name: 'my-footer',
  components: {},
  data() {
    return {
      hidden: false,
      lastModifiedTimestamp: '5 Apr 2020, 9:23 PM',
    };
  },
  methods: {
    setFooterVisibility(status) {
      this.hidden = !status;
    },
    toggleFooter() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style scoped>
footer {
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  bottom: 0;
  min-height: 100px;
  padding: 5px 20px;
  margin: 0 20%;
  transition: all .3s;
}

.disappear {
  transform: translateY(110%);
}

@media (max-width: 768px) {
  footer {
      margin: 0;
  }

  .close-btn {
      font-size: 25px !important;
      margin-top: -18px !important;
      right: 5px !important;
  }
}

footer > .last-modified {
  margin-bottom: 0px;
}

footer > .student-oath {
  font-family: monospace;
  margin-bottom: 3px;
}

footer > .copyright {
  font-size: 12px;
  display: block;
}

.copyright > a {
  color: #ab5ed1;
  font-weight: bold;
}

.divider {
  border-color: white;
  margin: 3px 0;
}

.close-btn {
  color: rgba(255, 255, 255, 0.7);
  position: absolute;
  font-size: 20px;
  margin-top: -15px;
  right: 20px;
  cursor: pointer;
}

.open-btn {
  position: fixed;
  right: 20px;
  bottom: 15px;
  font-size: 50px;
  color: #ab5ed177;
  transition: all .3s;
}

.open-btn:hover {
  transform: scale(1.25);
  color: #ab5ed1;
  cursor: pointer;
}
</style>
