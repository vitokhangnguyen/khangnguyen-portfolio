<template>
  <nav :class="['navbar', 'navbar-expand-sm', 'navbar-dark',
                $route.name !== 'home' ? 'bordered-bottom' : 'transparent']">
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
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/web-usability">Web Usability</router-link>
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
  background-color: rgb(4, 4, 51);
  padding: 0.4em 1em;
  font-family: Montserrat;
}

.bordered-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}

.transparent {
  background-color: rgb(0, 0, 0, 0);
}

.nav-item {
  margin-left: 3px;
  margin-right: 3px;
  transition: ease-in .3s;
}

.nav-link {
  text-align: center;
  font-size: 18px;
  color: white !important;
}

.nav-link:hover {
  font-weight: bolder;
}

.nav-link.router-link-active:hover {
  font-weight: normal;
}

.navbar-brand {
  margin-right: 0;
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  flex: 1;
}

.router-link-active {
  color: #ba66e4 !important;
  text-decoration: underline !important;
}
</style>
