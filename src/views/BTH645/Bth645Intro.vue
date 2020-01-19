<template>
  <div class="intro-pper">
    <h1>Introduction</h1>
    <p>Welcome to my <strong>BTH 645</strong> portfolio!</p>
    <p>
      This portfolio site is dedicated to the presentations and submissions of
      <i>6 labs</i> and <i>3 assignments</i>
      for the Multimedia Elements of User Interfaces (BTH 645) class (Winter 2020).
    </p>
    <p>
      The course works are going to be built up throughout the semester.
      Labs and assignments that are ready and released can be found on the sidebar
      on the left with a green check mark
      (<font-awesome-icon
      icon="check"
      style="color: #13e244; font-size: 20px; vertical-align: -4px;"></font-awesome-icon>)
      right beside it (You might need to expand to see it on mobile devices).
    </p>
    <p>
      Finally, I declare that...
    </p>
    <p class="oath">
      "This is wholly my own work in accordance with Seneca Academic Policy.
      No part of this work has been copied manually or electronically from any other source
      (including websites) or distributed to other students"
    </p>
    <p>
      The oath can be found at any point by bringing up the footer using the purple heart
      (<font-awesome-icon icon="heart" class="heart"></font-awesome-icon>)
      on the bottom right on the screen.
    </p>
  </div>
</template>

<script>
export default {
  name: 'bth645Intro',
  components: {},
};
</script>

<style scoped>
.oath {
  font-family: monospace;
  font-size: 18px;
}

.heart {
  font-size: 20px;
  color: rgb(167, 64, 199, 0.6);
  transition: all .3s;
  vertical-align: -5px;
}

.heart:hover {
  transform: scale(1.25);
  color: rgb(167, 64, 199, 1);
}
</style>
