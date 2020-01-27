<template>
<div class="about-wrapper">
  <h1>Who Am I?</h1>
  <img class="about-image" src="@/assets/about-photo.jpg" />
  <p>
    My name is <em>Khang (Ngọc Nam) Nguyễn</em>.
    I am an international student in Toronto, Canada
    currently pursuing the Software Development Degree program
    in my 3rd year at Seneca College, which I really enjoy.
    I will be on my co-op term next semester (Summer 2020) and
    I am looking for job opportunities in the industry to expand my skill set.
  </p>
  <p>
    I developed an interest in technology at a very young age.
    That interest, throughout the years, has turned into my passion for programming
    and has driven me in making many important decisions of my life including
    taking my study to Canada and choosing my current academic, as well as, future career path.
    The aspects of Software Development in which I would love to work is
    Web and Application Development although I am always amazed by
    the capability of Machine Learning and always want to know more about it.
    As a young adult and a fresher in the industry, I am eager to grow professionally
    and learn more to fulfil my goal of becoming a skilled software engineer.
  </p>
  <p>
    In addition to programming, I am intrigued by Math and History and
    consider them my side interests. In my free time, I like to go biking, watch Netflix,
    play video games, hanging out with my friends and travelling
    (<span class="photo-position"></span> is me at Copenhagen, Denmark).
    Overall, I am a very easy-going and friendly person.
    I like to make friends and get to know people from different backgrounds
    (nationality, culture, profession… etc.).
  </p>
  <p>
    Finally, I am very glad that I realized my hobbies and goals early in my life and
    I believe that doing what I do right now makes me the best version of myself.
    I don’t know what my future has for me ahead, but whatever it is,
    I would be excited to embrace it when it comes.
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
      lastModified: '26 Jan 2020, 8:50 PM',
    };
  },
};
</script>

<style scoped>
.about-wrapper {
  height: 92%;
  margin: 0 10em;
  padding: 1.5em 1em;
}

.about-wrapper  h1 {
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
}

.about-image {
  width: 30%;
  float: left;
  margin-right: 2em;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.7);
}

.photo-position::after {
  content: 'on the left';
}

@media (max-width: 768px) {
  .about-wrapper {
    margin: 0 0;
  }

  .about-image {
    width: 100%;
    margin-bottom: 1.5em;
  }

  .photo-position::after {
    content: 'at the top';
  }
}
</style>
