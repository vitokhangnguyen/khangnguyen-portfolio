<template>
<div class="asg1-wrapper">
  <h1>Assignment 2</h1>
  <p>The objectives of this assignment are to:</p>
  <ul>
    <li>Understand fundamental video concepts and filming procedure</li>
    <li>Practice multimedia presentations using current available authoring tools</li>
    <li>Practice basic filming techniques and steps</li>
    <li>An opportunity to train teamwork skills.</li>
  </ul>
  <h2>Team Members &amp; Contributions</h2>
  <ul>
    <li>Khang Nguyen: script writing, narration</li>
    <li><a href="https://matrix.senecacollege.ca/~bth645_201a30/">Rafael Ungar</a>: filming and editing</li>
  </ul>
  <h2>Equipment</h2>
  <ul>
    <li><strong>Cameras</strong>: Canon VIXIA HF R400 camcorder, Samsung Galaxy J7 2017</li>
    <li><strong>Microphone</strong>: Embedded HP Pavilion 15 Microphone</li>
    <li><strong>Other</strong>: Manfrotto MK394-PQ Tripod</li>
  </ul>

  <h2>Video</h2>
  <div class="d-flex justify-content-center" id="p5Canvas">
    <iframe src="https://drive.google.com/file/d/1FMLnpf1TcdgOx7roeYSPSpZT4jlCm-pJ/preview" width="640" height="360"></iframe>
  </div>
  <h2>Script</h2>
  <div class="d-flex justify-content-center" id="p5Canvas">
    <iframe src="https://drive.google.com/file/d/1rZ7hgb0kuvA1LYBOQZDK1ZJX1IWkx9-B/preview" width="640" height="480"></iframe>
  </div>

  <content-footer :timestamp="lastModified" />
</div>
</template>

<script>
import ContentFooter from '@/components/ContentFooter.vue';

export default {
  components: {
    ContentFooter,
  },
  data() {
    return {
      lastModified: '5 Apr 2020, 9:23 PM',
    };
  },
};
</script>

<style>

</style>
