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
.content-wrapper h1 {
  font-weight: bold;
}

.content-wrapper a {
  color: rgba(255, 64, 169, 0.8);
  font-weight: bold;
}

.content-wrapper a:hover {
  color: rgb(255, 64, 169);
}
</style>
