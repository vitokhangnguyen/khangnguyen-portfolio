<template>
<div class="lab5-wrapper">
  <h1>Lab 5</h1>
  <p>The objectives of this lab are to:</p>
  <ul>
    <li>Understand video in multimedia presentations</li>
    <li>Practice with video editing and conversion with different formats</li>
  </ul>
  <h2>Video</h2>
  <div class="media-wrapper">
    <video controls>
      <source src="@/assets/bth645/lab5/video.mp4" type="video/mp4" preload="auto" />
      You browser does not support audio
    </video>
    <p>Recorded video with background music</p>
  </div>
  <h2>Discussion</h2>
  <h3>The Process</h3>
  <p>
    The first step in the process was to come up with an idea for the video.
    Since the video is supposed to be short, I think a time-lapse video might be a good idea.
  </p>
  <p>
    Next step is to shoot the video. I utilized the equipment at Seneca Sandbox Studio
    including their camcorder, tripod and 3D Printer. The shooting phase was easy
    since I just needed to hit "Start", wait then hit "Stop". Also, I shot in the muted (no audio)
    mode so I can just easily add background music later.
  </p>
  <p>After having retrieved all the footage files, I started editing process. This included:</p>
  <ol>
    <li>
      Prepared and imported all retrieved footages into a video editor
      (OpenShot in this case)
    </li>
    <li>
      Used the appropriate tools to process the video (slicing, trimming and speeding up the video).
      After this step, the ~36 minutes video scaled down to ~55 seconds.
    </li>
    <li>Added title, caption and ending screens.</li>
    <li>
      Applied transitioning effects betwen the title screen, the video and the ending screen.
      Added transitions between scene in the video, as well, since I removed some parts of
      the original footages to create a smoother time-lapse effect.
    </li>
    <li>
      Selected a copyright-free background music and added to the video. Since the music
      was originally ~5 minutes long, I used Audacity to cut it down to fit the video's length.
    </li>
  </ol>
  <p>
    After editing, I exported the video file just to realize it was ~124 Mb which was unsuitable
    for online publishing. Thanks to Prism, I managed to reduce the bit rate and the resolution
    of the video resulting in the perfect file size of ~13 Mb
  </p>
  <p>I was able to publish it afterward.</p>
  <h3>Thoughts on Video Creating/Editing</h3>
  <p>
    Creating this video is a fun and easy process. However, it requires some considerations
    regarding the purpose of the video. For example, the current instance, in which I needed
    to publish my video online. Size and format are the 2 big factors now:
  </p>
  <ul>
    <li>
      The size needed to be reasonably small not to greatly affect the loading time nor the quality
      (in general, the user's experience) of the video. Compression should be considered to overcome
      this difficulty.
    </li>
    <li>
      The file format also should not be neglected since some certain formats are not supported
      by some certain browsers. Some examples are MP4 is supported by virtually every browsers
      while OGG is not supported by IE and Safari (according to
      <a href="https://www.w3schools.com/tags/tag_video.asp">W3School</a>). And finally, to my surprise,
      AVI and WAV formats cannot be natively embedded into a browser without an extension or plugin.
    </li>
  </ul>

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
      lastModified: '24 Feb 2020, 9:15 PM',
    };
  },
};
</script>

<style>

</style>
