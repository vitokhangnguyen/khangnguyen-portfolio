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
  /* background-color: rgb(18, 19, 76); */
  /* background-color: rgba(32, 32, 102, 0.5); */
}

.content-wrapper {
  width: 100%;
  margin: 0 15%;
  padding: 1em;
}

@media (max-width: 768px) {
  .content-wrapper {
    margin: 0 0;
  }
}
</style>
