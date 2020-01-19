<template>
<div class="web-usability-wrapper">
  <h1>Web Usability</h1>
  <p class="first-paragraph">
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
      My name is displayed with emphasis on the homepage and always displayed on the navigation bar
      because it is important for the context of this site, a portfolio
    </li>
  </ol>
</div>
</template>

<script>
export default {
  name: 'web-usability',
  components: {},
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin-bottom: 16px;
}

.first-paragraph {
  margin-bottom: 0.25em;
}

.web-usability-wrapper {
  margin: 0 20%;
  padding: 1em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.web-usability-wrapper li {
  margin: 0.3em 0;
}

@media (max-width: 768px) {
  .web-usability-wrapper {
    margin: 0 0;
    overflow-x: hidden;
  }
}
</style>
