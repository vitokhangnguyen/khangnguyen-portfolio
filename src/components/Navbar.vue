<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
    <div class="navbar-brand">KHANG NGUYEN</div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#rightNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="rightNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/bth645">BTH 645</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  components: {},
};
</script>

<style scoped>
.navbar {
    background-color: rgb(0, 0, 0, 0);
    padding: 0.4em 1em;
    font-family: Montserrat;
}

.nav-link {
  text-align: center;
  font-size: 18px;
  color: white !important;
}

.navbar-brand {
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  flex: 1;
}

.router-link-exact-active {
  color: #ba66e4 !important;
  text-decoration: underline !important;
}
</style>
