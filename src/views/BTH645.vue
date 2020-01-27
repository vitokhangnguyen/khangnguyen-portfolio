<template>
  <div class="wrapper">
    <bth645-sidebar />
    <div class="content-wrapper">
        <router-view />
    </div>
  </div>
</template>

<script>
import Bth645Sidebar from '@/components/Bth645Sidebar.vue';

export default {
  name: 'bth645',
  components: {
    Bth645Sidebar,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}

.content-wrapper {
  width: 100%;
  min-height: 80vh !important;
  margin: 0 15%;
  padding: 1em;
}

@media (max-width: 768px) {
  .content-wrapper {
    margin: 0 0;
    overflow-x: hidden;
  }
}
</style>

<style>
.content-wrapper > div {
  height: 100%;
}

.content-wrapper h1 {
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 15px;
}

.content-wrapper h2 {
  font-weight: bold;
  font-size: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content-wrapper p {
  margin-bottom: 10px;
}

.content-wrapper ul, .content-wrapper ol {
  margin: 0;
  padding-left: 2em;
}

.content-wrapper li {
  margin-top: 3px;
  margin-block: 3px;
}

.content-wrapper a {
  color: rgba(255, 64, 169, 0.8);
  font-weight: bold;
}

.content-wrapper a:hover {
  color: rgb(255, 64, 169);
}
</style>
