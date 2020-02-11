<template>
<div class="lab4-wrapper">
  <h1>Lab 4</h1>
  <p>The objectives of this lab are to:</p>
  <ul>
    <li>Understand sound in multimedia presentations</li>
    <li>Practice with sound editing and conversion with different formats</li>
  </ul>
  <h2>Audios</h2>
  <div class="row">
    <div class="col-md-12">
      <div class="audio-wrapper">
        <audio class="audio-elem" controls>
          <source src="@/assets/bth645/lab4/recorded.mp3" type="audio/mpeg" preload="auto" />
          You browser does not support audio
        </audio>
        <p class="audio-caption">Self-recorded</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="audio-wrapper">
        <audio class="audio-elem" controls>
          <source src="@/assets/bth645/lab4/original.mp3" type="audio/mpeg" preload="auto" />
          You browser does not support audio
        </audio>
        <p class="audio-caption">Original (source: <a href="https://www.bensound.com">https://www.bensound.com</a>)</p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="audio-wrapper">
        <audio class="audio-elem" controls>
          <source src="@/assets/bth645/lab4/modified.ogg" type="audio/ogg" preload="auto" />
          <source src="@/assets/bth645/lab4/modified.mp3" type="audio/mpeg" preload="auto" />
          You browser does not support audio
        </audio>
        <p class="audio-caption">Modified</p>
      </div>
    </div>
  </div>
  <h2>Discussion</h2>
  <ol>
    <li>
      I chose to save my self-recorded audio in MP3 format for 2 main following reasons:
      <ul>
        <li>
          According to <a href="https://www.w3schools.com/html/html5_audio.asp">W3School</a>,
          MP3 currently is the only format that is supported by all common browsers,
          unlike WAV which is not supported by IE/Edge and
          OGG which is not supported by IE/Edge and Safari.
        </li>
        <li>
          MP3 is a compressed format so the size of audio file served to the user is small.
          Therefore, it is suitable for online distribution. (Altheough the compression is lossy
          and resulting in minor loss of quality.)
        </li>
      </ul>
    </li>
    <li>
      <strong>Web Usability: Audio</strong>
      <ul>
        <li>
          Allow the user full control of the audio(s) and
          place the controls at a visually noticeable location
        </li>
        <li>
          Avoid using autoplay audio as much as possible because
          it may cause a lot of disturbance for the user every time
          they access the page.
        </li>
        <li>
          Choose an appropriate file format for web distribution
          that is functional cross-platform (or browser).
          MP3 is generally a good option.
        </li>
        <li>
          Prepare "fallback" file formats (if MP3 format is not available)
          to ensure audio usability across browsers.
        </li>
        <li>
          Use audio with decent quality but reasonably small file size
          to reduce loading time at client-side. Allow "preload" if possible.
        </li>
      </ul>
    </li>
    <li>
      Some audio file formats I considered while working on this lab:
      <ul>
        <li>
          <strong>MP3</strong>: Generally a useful format.
          Extremely suitable for omline distribution due to compression,
          hence small file size. However, it is lossy compression resulting
          in the loss of quality over multiple editions.
        </li>
        <li>
          <strong>WAV</strong>: A good format for storing and editing of audio because
          it is uncompressed. Not a good idea for online publishing due to large
          file size. (My same <em>recorded</em> audio is 3.52 Mb when exported to MP3
          but is roughly 15 Mb when I initially exported to WAV).
        </li>
      </ul>
      For general purposes, I believes these 2 formats are sufficient.
    </li>
    <li>
      Modifications I made to my <em>Original</em> audio file includes:
      <ul>
        <li>Speed up the audio by 1.5 times</li>
        <li>Reduce the pitch from 331.579 Hz to 165.790 Hz (reduced by 2 times)</li>
        <li>Reduce aplitude by 5 dB (reduce loudness)</li>
        <li>Add echo effect of 0.5s delay and decay factor of 0.3</li>
        <li>Truncate silent periods at the beinging and the end of the audio</li>
        <li>Add Fade In and Fade Out effect to the first and last 10s of the audio</li>
        <li>Partailly remove a repetitive part of the audio to reduce size</li>
      </ul>
      I saved the file as OGG because WAV is too large for online distribution and the initial file
      is already MP3. However, I prepare a 2nd source in MP3 format which is "fallen-back" to
      when the browser (i.e.: IE/Edge and Safari) does not support OGG.
    </li>
  </ol>

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
      lastModified: '10 Feb 2020, 11:54 PM',
    };
  },
};
</script>

<style>

</style>
