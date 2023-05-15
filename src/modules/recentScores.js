export default class RecentScores {
  constructor(list) {
    this.list = list;
  }

  render() {
    return `
        <div class="head">
            <h2 class="title">Recent scores</h2>
            <button>Refresh</button>
        </div>
        ${this.list.render()}`;
  }
}