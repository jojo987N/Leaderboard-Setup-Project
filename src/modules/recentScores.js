export default class RecentScores {
  static render = (store, list) => {
    document.querySelector('.list').innerHTML = list.render(store);
  }
}
