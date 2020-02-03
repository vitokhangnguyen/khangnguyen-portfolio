<template>
<div class="lab3-wrapper">
  <h1>Lab 3</h1>
  <p>The objectives of this lab are to:</p>
  <ul>
    <li>Recognition of the importance of images in multimedia presentations</li>
    <li>Practice on images with the consideration of usability of web design</li>
  </ul>
  <h2>Images</h2>
  <p>(Reccomend collapsing sidebar for better experience)</p>
  <div class="row">
    <div class="col-md-6">
      <figure>
          <img class="img-fluid" src="@/assets/bth645/lab3/original.jpg" alt="original"/>
          <figcaption>Original Imagae</figcaption>
      </figure>
    </div>
    <div class="col-md-6">
      <figure>
          <img class="img-fluid" src="@/assets/bth645/lab3/modified.jpg" alt="modified"/>
          <figcaption>Modified Image</figcaption>
      </figure>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <figure>
          <img class="img-fluid" src="@/assets/bth645/lab3/drawn.png" alt="draw"/>
          <figcaption>Self-drawn Image</figcaption>
      </figure>
    </div>
  </div>
  <h2>Discussion</h2>
  <ol>
    <li>
      As for modification, I used GIMP to...
      <ul>
        <li>Add 50% to the color contrast</li>
        <li>Add 40% to the brightness</li>
        <li>Apply blur and focus effect</li>
      </ul>
      ...of the <em>Origin Image</em>. The result can be seen as the <em>Modified Image</em>.
      I think the photo looks more vivid after the modification. I accomplished this by using
      the Color and Filter menu on GIMP.
    </li>
    <li>
      <p>
        After medofication, I can notice that the file size of the modified image
        increased by 4 times comparing to file size of the origin image
        (from <strong>280 kB</strong> of the original to <strong>816 kB</strong> of the modified).
        This makes the modified image takes a longer time to load on a webpage.
      </p>
      <p>
        Although when I exported the modified image, I chose the option to keep only 90%
        of the quality, I don't think the decline in the quality is noticeable.
      </p>
    </li>
    <li>
      <p>
        When I was drawing the new image, I considered a lot about the use of colors in my image.
        I want to make sure that the colors has a good contrast ratio so that it is clear to se.
        And I also considered the size-ratio of the image in the begining so I won't end up with
        a deformed image.
      </p>
      <ul>
        The steps I took to do this task:
        <li>Downlaod, install and create a new project with GIMP</li>
        <li>Select the size of the canvas of the project which is the size of the image</li>
        <li>Give some time to think of the context of the image</li>
        <li>I used my laptop touchscreen to draw the outline of the image</li>
        <li>Coloring with appropriate colors</li>
        <li>Save, upload and link it here</li>
      </ul>
    </li>
  </ol>
  <h2>Reflection</h2>
  <p>
    I think I will give this lab 6/10 for the difficulty of this lab. It is pretty easy
    but I have to take time to download and figure out the photo editing tool: GIMP,
    it takes longer for someone who is not familiar with photo editing like me. Once I know
    where are the toolbars and buttons I need, things got easier.
  </p>
  <p>
    Besides that, the lab is fun because I have not drawn for a long time.
    I also got to learn a little bit about image editing. After all, I created an artwork!
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
      lastModified: '3 Feb 2020, 5:16 AM',
    };
  },
};
</script>

<style>

</style>
