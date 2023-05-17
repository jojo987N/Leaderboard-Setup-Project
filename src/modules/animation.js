import lottie from 'lottie-web';
import animationData from '../loading.json';

export default class Animation {
  constructor() {
    this.container = document.getElementById('animation');
  }

  render() {
    lottie.loadAnimation({
      container: this.container,
      renderer: 'svg',
      animationData,
    });
  }

  remove() {
    this.container.classList.add('hide');
  }
}