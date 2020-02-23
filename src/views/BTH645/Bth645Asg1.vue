<template>
<div class="asg1-wrapper">
    <h1>Assignment 1</h1>
    <p>The objectives of this assignment are to:</p>
    <ul>
      <li>Understand fundamental multimedia presentations concepts</li>
      <li>Practice multimedia presentations using current available authoring tools</li>
      <li>Apply multimedia presentation online with consideration of usability of Internet</li>
    </ul>
    <h2>Audio</h2>
    <div class="media-wrapper">
      <audio controls>
        <source src="@/assets/bth645/asg1/audio.mp3" type="audio/mpeg" preload="auto" />
        You browser does not support audio
      </audio>
      <p>Narration with background music</p>
    </div>
    <div class="quote-box">
      <h3>Script</h3>
      <p class="pre">
        Hello, today I am going to tell you about Denmark and my trip there last summer.
        Denmark is a Nordic country located in Northwest Europe and, like Canada,
        it is a constitutional monarchy with Queen Margrethe II as the current Head of State.
        Denmark is a beautiful and peaceful country. My main destination was the City of Aarhus
        where I had a wonderful time exploring the city and the people.
        Do you know that the Dane bike a lot?  No? Neither did I.
        I also visited Copenhagen, the capital city.
        There, I visited the Royal Palace, watched the Changing of the Guard ceremony,
        went on a boat tour around the city and enjoyed the delicious local cuisine.
        The one weekend night I spent at Copenhagen was absolutely amazing
        with the best firework show I have ever seen.
        I really love the country and plan to revisit it someday. Thanks for watching.
      </p>
      <span>Word count: 151 words</span>
    </div>
    <h2>Video</h2>
    <div class="media-wrapper">
      <video width="640" height="360" controls>
        <source src="@/assets/bth645/asg1/video.mp4" type="video/mp4" preload="auto" />
        You browser does not support audio
      </video>
      <p class>Narration with background music and images</p>
    </div>
    <h2>Reflection</h2>
    <h3>My Efforts</h3>
    <p>
      The process of creating the video for this assignment was fun.
    </p>
    <p>
      I started by writing the script for my narration in a Word document.
      While editting, I wanted to keep it in the range of 120-150 words so
      my video's length would not be to far away from 1 minute.
    </p>
    <p>
      Next, I started my recording. I utilized the Sandbox Studio's recording room
      at Seneca where they have equipment to record audio with high quality.
      During the recording, I revisited my script multiple times to change some
      word choices, add punctuations and cut down lengthy sentences to promote
      understandability and conciseness.
    </p>
    <p>
      As for the background music, I chose a copyright-free song on YouTube Audio Library
      with a happy tone and legnth in the range of 1:00-1:30. I used Audacity
      to put the music and my narration together. With the help of Audactiy's Envelope Tool,
      I managed to create an effect in which the music would gradually turn down volume
      when my narration starts and turn back up when my narration ends. I also normalized
      and reduced noises in my narration.
    </p>
    <p>Here's a look of my Audacity project's final version:</p>
    <figure>
        <img class="img-fluid" src="@/assets/bth645/asg1/audacity-proj.jpg" alt="draw"/>
        <figcaption>Editted audio tracks of my narration and background music</figcaption>
    </figure>
    <p>
      The next step was to gather resources needed for the video (in this case, images).
      Based on my initial idea, which is to create a video about the trip to Denmark I went on
      last summer, I decided to use images my friends and I took during the trip.
      It did not take long for me to find images that matches the script (given that
      we took a lot of photos during the trip).
    </p>
    <p>
      The final step was to import all images and the audio file into OpenShot,
      align them on the timeline with proper position and duration to match my
      narration and apply some transitioning effects.
    </p>
    <h3>Difficulties</h3>
    <p>Some difficulties I encountered during the process:</p>
    <ul>
      <li>
        Re-familiarizing myself with the tools since
        I have not created a video in a long time.
      </li>
      <li>
        Exporting the final version since the first time I did,
        the video file was 100 Mb which was not suitable
        to host on Matrix. I sized it down and ended up with
        a much lighter file.
      </li>
    </ul>
    <h3>Rating</h3>
    <p>
      I think the assignment is fun and not too difficult besides having to spend time
      figuring out the tools and the proper process.
    </p>
    <p>
      It is a good combination of photo, audio and video creating/editting.
      I think I can give it a 6/10.
    </p>
    <h2>Student Oath</h2>
    <p>
      Student Oath can be found on the
      <router-link to="/bth645">Introduction</router-link>
      page of BTH645 portfolio.
    </p>

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
      lastModified: '22 Feb 2020, 9:25 PM',
    };
  },
};
</script>

<style scoped>

</style>
