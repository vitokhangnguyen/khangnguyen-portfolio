<template>
<div class="lab2-wrapper">
  <h1>Lab 2</h1>
  <p>The objectives of this lab are to:</p>
  <ul>
    <li>
      Create one webpage with
      <router-link to="/about">introduction of yourself</router-link>
      or an article
    </li>
    <li>Discuss and apply the consideration of web usability about TEXT.</li>
  </ul>

  <h2>Web Usability: Text</h2>
  <p>
    Here are some of my considerations regarding the use of <strong>text</strong>
    while building this portfolio site:
  </p>
  <ol>
    <li>
      Text on a page (espeically an article) should be organized into a hierarchy order
      with different levels of headers visually separated from ordinary text.
    </li>
    <li>
      Avoid using Serif font on the web. It works better for paper-based documents
      and is very turbulent on electronic screens.
    </li>
    <li>
      Combine many font families in the styling allowing fallback to different fonts
      in case the users do not have your primary font in their system.
    </li>
    <li>
      Use an appropriate font size for different elements of the website and make
      sure they are all big enough to read.
    </li>
    <li>
      Maintain an appropriate and consistent distance between paragraphs on a page,
      lines in a paragraphs (leading) and letters on a line (tracking).
    </li>
    <li>
      Allocate white spaces around the text bodies to avoid the feeling of content overwhelming
      by using margin or padding. Make sure these margins and paddings are appropriate
      for different screen sizes, too.
    </li>
    <li>
      Cosider using dark theme for the website and use light color such as white
      for the text. This maintains a good contrast ratio while reducing eye strain
      for the users while reading text.
    </li>
    <li>
      Support easy skimming and scanning of the texts by bolding, italicizing, color-highlighting
      contents where emphasis is needed. However, do <strong>not</strong> do it everywhere
      because nothing is emphasized when everything is.
    </li>
    <li>
      Try to keep (text) content on a page small to fit on one page
      because most users do not want to scroll through something uninterested and tedious.
    </li>
    <li>
      Finally, do not use text if not necessary. Images, videos or interactive elements
      can deliver more information in a way more vivid way.
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
      lastModified: '27 Jan 2020, 1:45 AM',
    };
  },
};
</script>

<style scoped>

</style>
