<template>
  <footer>
    <hr>
    <span>This page was last modified on {{ lastModified }}</span>
  </footer>
</template>

<script>
export default {
  props: {
    timestamp: String,
  },
  data() {
    return {
      lastModified: this.timestamp,
    };
  },
};
</script>

<style scoped>
footer {
  position: sticky;
  top: 100%;
  margin-top: 25px;
}

hr {
  background-color: rgba(255, 255, 255, 0.75);
  height: 1px;
  border: none;
  margin-bottom: 1em;
}
</style>
