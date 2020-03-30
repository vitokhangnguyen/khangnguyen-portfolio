<template>
<div class="lab6-wrapper">
  <h1>Lab 6</h1>
  <p>The objectives of this lab are to:</p>
  <ul>
    <li>Practice with p5.js drawing</li>
  </ul>
  <h2>Sketch</h2>
  <div class="d-flex justify-content-center" id="p5Canvas">
    <!-- Sketch goes here -->
  </div>
  <p style="margin-top: 15px;">
    <strong>* Note:</strong>
    The sketch is drawn with p.js except for the houses which are actually embedded images.
  </p>
  <h2>p5.js Script</h2>
  <iframe
    height="628" style="width: 100%;" scrolling="no" title="BTH645Lab6-p5Sketch"
    src="https://codepen.io/vitokhangnguyen/embed/dyoaOLb?height=628&theme-id=dark&default-tab=js"
    frameborder="no" allowtransparency="true" allowfullscreen="true"
  >
    See the Pen <a href='https://codepen.io/vitokhangnguyen/pen/dyoaOLb'>BTH645Lab6-p5Sketch</a> by Khang Nguyen
    (<a href='https://codepen.io/vitokhangnguyen'>@vitokhangnguyen</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

  <content-footer :timestamp="lastModified" />
</div>
</template>

<script>
import P5 from 'p5';
import lab6SketchScript from '@/js/bth645/lab6-sketch';
import ContentFooter from '@/components/ContentFooter.vue';

export default {
  components: {
    ContentFooter,
  },
  data() {
    return {
      lastModified: '29 Mar 2020, 11:22 PM',
    };
  },
  mounted() {
    // eslint-disable-next-line no-new
    new P5(lab6SketchScript, document.getElementById('p5Canvas'));
  },
};
</script>

<style>

</style>
