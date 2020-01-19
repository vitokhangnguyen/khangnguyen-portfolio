const state = {
  debug: true,
  state: {
    use: false,
  },
  useImageBackground() {
    // if (this.debug) console.log('useImageBackground triggered', !this.state.use);
    this.state.use = true;
  },
  unuseImageBackground() {
    // if (this.debug) console.log('unuseImageBackground triggered', !this.state.use);
    this.state.use = false;
  },
  isUsingImage() {
    return this.state.use;
  },
};

export default state;
