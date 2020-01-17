<template>
<div class="sidebar-wrapper">
  <nav :class="sidebarClasses">
    <div class="sidebar-header">
      <h3>BTH 645</h3>
      <p>Multimedia Elements for User Interfaces</p>
    </div>

    <ul class="list-unstyled components">
      <button type="button" id="sidebarCollapse" class="btn sidebar-toggler" @click="toggleSidebar">
        <!-- <template v-if="sidebarClasses.active"> -->
          <font-awesome-icon icon="chevron-right"></font-awesome-icon>
          <font-awesome-icon icon="chevron-right"></font-awesome-icon>
        <!-- </template>
        <template v-else>
          <font-awesome-icon icon="chevron-left"></font-awesome-icon>
          <font-awesome-icon icon="chevron-left"></font-awesome-icon>
        </template> -->
      </button>
      <li>
        <router-link to="/bth645" style="border-top: none;">Introduction</router-link>
      </li>
      <li>
        <a
          href="#labSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >Labs</a>
        <ul class="collapse list-unstyled" id="labSubmenu">
          <li>
            <router-link to="/bth645/lab1">Lab 1</router-link>
          </li>
          <li>
            <router-link to="/bth645/lab2">Lab 2</router-link>
          </li>
          <li>
            <router-link to="/bth645/lab3">Lab 3</router-link>
          </li>
          <li>
            <router-link to="/bth645/lab4">Lab 4</router-link>
          </li>
          <li>
            <router-link to="/bth645/lab5">Lab 5</router-link>
          </li>
          <li>
            <router-link to="/bth645/lab6">Lab 6</router-link>
          </li>
          <li>
            <router-link to="/bth645/lab7">Lab 7</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="#asgSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >Assignments</a>
        <ul class="collapse list-unstyled" id="asgSubmenu">
          <li>
            <router-link to="/portfolio/asg1">Assignment 1</router-link>
          </li>
          <li>
            <router-link to="/portfolio/asg2">Assignment 2</router-link>
          </li>
          <li>
            <router-link to="/portfolio/asg3">Assignment 3</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'bth645Sidebar',
  components: {},
  data() {
    return {
      sidebarClasses: { sidebar: true, active: false },
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarClasses.active = !this.sidebarClasses.active;
    },
  },
};
</script>

<style scoped>
.sidebar-wrapper {
  display: flex;
}

.sidebar {
  width: 250px;
  min-height: calc(100vh - 3.6em );
  background-color: #843ea7;
  transition: all 0.3s;
  box-shadow: 2px 0px 5px 0px rgba(0,0,0,0.25);
}

.sidebar-header {
  height: 160px;
  padding: 20px;
  background-image:  linear-gradient(rgba(107, 32, 145, 0.25), rgba(107, 32, 145, 0.25)),
    url("../assets/bth645-sidebar-background.jpg");
  background-size: cover;
  text-align: center;
}

.sidebar-header > h3 {
  margin-top: 20px;
  font-weight: bolder;
}

.sidebar-header > p {
  margin-bottom: 0;
  font-weight: 600;
}

.sidebar ul.components {
  padding: 10px 0;
}

.sidebar.active {
    margin-left: -250px;
    margin-right: 0;
    box-shadow: none;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

@media (max-width: 768px) {
    .sidebar {
        margin-left: -200px;
        width: 200px;
    }

    .sidebar.active {
        margin-left: 0;
        margin-right: 15px;
    }

    .sidebar:not(.active) .sidebar-toggler {
      transform: none !important;
      background: linear-gradient(90deg,
        rgba(167,21,21,1) 50%,
        rgba(167,21,21,0.5) 50%) !important;
    }

    .sidebar-toggler {
      margin-left: 175px !important;
      transform: rotate(180deg);
    }
}

.sidebar ul p {
    color: #fff;
    padding: 10px;
}

.sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

.sidebar > ul > li > a {
  border-top: 1px #b38ac7 solid;
}

.sidebar ul li ul li a:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
  border-radius: 0.1cm;
}

.sidebar ul li ul li .router-link-exact-active:hover {
  transform: none;
  box-shadow: none;
  border-radius: 0;
}

.sidebar ul li .router-link-exact-active {
    color: #9c4ac5;
    font-weight: bold;
    background: #fff;
}

.sidebar ul li.active > a, a[aria-expanded="true"] {
  color: white;
  background: #9c4ac5;
}

ul ul a {
  font-size: 1em !important;
  padding-left: 30px !important;
  background: #9c4ac5;
}

.sidebar:not(.active) .sidebar-toggler {
  transform: rotate(180deg);
}

.sidebar-toggler {
  color: white;
  background: rgba(167,21,21,1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: sticky;
  margin-top: -45px;
  margin-left: 225px;
}

.sidebar-toggler:hover {
  color: white;
}

.sidebar-toggler:focus {
  box-shadow: none;
}
</style>
