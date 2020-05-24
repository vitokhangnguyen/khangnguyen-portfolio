<template>
<div class="asg3-wrapper">
  <h1>Assignment 3</h1>
  <p>The objectives of this assignment are to:</p>
  <ul>
    <li>Design and develop online animation using P5.js and related technologies</li>
  </ul>
  <h2>Sketch</h2>
  <div class="d-flex justify-content-center" id="p5Canvas">
    <!-- Sketch goes here -->
  </div>
  <h3 style="margin-top: 15px;">Description &amp; Interaction</h3>
  <ul>
    <li>
      There are 2 view modes of the animation: The <i>day-time</i> and the <i>night-time</i>.<br>
      There will be a plane flying up and down between the clouds across the canvas
      in the begining of the animation or right after switching to day-time mode.<br>
      There will be a rocket firing up toward the moon right after switcing to night-time mode.<br>
      In both view modes, you can see Lightning McQueen intervally drives on the street,
      stops to and introduce himself and then drives off the canvas.
    </li>
    <li>
      Click <strong>Left Mouse Button (LMB key)</strong> anywhere on the canvas
      to switch between day-time and night-time view mode.
    </li>
    <li>
      Press <strong>Enter Key</strong> at any time to pause and resume the animation
      (note that a message is displayed at the top-left corner of the canvas when paused)
    </li>
  </ul>
  <h2>p5.js Script</h2>
  <iframe
    height="650" style="width: 100%;" scrolling="no" title="BTH645-Asg3-Sketch"
    src="https://codepen.io/vitokhangnguyen/embed/LYpEeNz?height=579&theme-id=dark&default-tab=js"
    frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy"
  >
    See the Pen <a href='https://codepen.io/vitokhangnguyen/pen/LYpEeNz'>BTH645-Asg3-Sketch</a> by Khang Nguyen
    (<a href='https://codepen.io/vitokhangnguyen'>@vitokhangnguyen</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

  <content-footer :timestamp="lastModified" />
</div>
</template>

<script>
import P5 from 'p5';
import asg3Sketch from '@/js/bth645/asg3-sketch';
import ContentFooter from '@/components/ContentFooter.vue';

export default {
  components: {
    ContentFooter,
  },
  data() {
    return {
      lastModified: '11 Apr 2020, 1:17 AM',
    };
  },
  mounted() {
    // eslint-disable-next-line no-new
    new P5(asg3Sketch, document.getElementById('p5Canvas'));
  },
};
</script>

<style>

</style>
