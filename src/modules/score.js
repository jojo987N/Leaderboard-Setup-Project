export default class Score {
  constructor(score, user) {
    this.user = user || document.querySelector('.name').value;
    this.score = score || document.querySelector('.score').value;
  }

  render(i) {
    return `
        <li class="${i % 2 === 0 || 'bg-grey'}">${this.user}: ${this.score}</li>
        `;
  }
}