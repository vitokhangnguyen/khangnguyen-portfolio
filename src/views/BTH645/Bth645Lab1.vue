<template>
  <div class="lab1-wrapper">
    <h1>Lab 1</h1>
    <p>The objectives of this lab are to:</p>
    <ul>
      <li>Create a portfolio website to host all the tasks for this semester</li>
      <li>
        Discuss and apply the consideration of web usability
      </li>
    </ul>

    <h2>Web Usability</h2>
    <p>
      Here are some design decisions regarding usability that I considered
      while building this portfolio site:
    </p>
    <ol>
      <li>Simple and intuitive homepage with virtually only 1 button to continue to content</li>
      <li>Using background image only for homepage to distinct it from other content pages</li>
      <li>
        Using dark theme color with white text to ensure proper contrast ratio (hence readability)
        while reducing the user's eye strain during long reading
      </li>
      <li>
        Always giving feedback about the user's location in the site
        by highlighting the navigation elements that led the user there
        (i.e.: navbar's link, sidebar's button)
      </li>
      <li>
        Visually separating navigation bar and sidebar from the page's content
        with the use of darker or brighter color and box shadow effect
      </li>
      <li>
        Effect when hovering over any clickable navigational elements
        (e.g.: scaling, box shadow, bolding)
        to avoid misclicks of another element beside it
      </li>
      <li>
        Allowing toggling the visibility (show/hide) of potentially distracting elements
        (i.e: sidebar and footer) to help users focus more on the page's content
      </li>
      <li>
        The use of a lot of blank space (e.g.: margins, around elements, between paragraphs)
        to avoid the impression of overwhelming by contents and graphics
      </li>
      <li>
        The site must render all content responsively on different screen sizes and devices
        (i.e.: computer, tablet, mobile)
      </li>
      <li>
        My name is displayed with emphasis on the homepage and always displayed
        on the navigation bar because it is important for the context of this site, a portfolio
      </li>
    </ol>

    <content-footer :timestamp="lastModified" />
  </div>
</template>

<script>
import ContentFooter from '@/components/ContentFooter.vue';

export default {
  name: 'bth645Lab1',
  components: {
    ContentFooter,
  },
  data() {
    return {
      lastModified: '19 Jan 2020, 7:31 PM',
    };
  },
};
</script>
