<template>
  <div class="wrapper">
    <bth645-sidebar />
    <div class="content">
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
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  width: 100%;
}

.content {
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  background-color: rgba(15, 21, 104, 0.377);
}
</style>
