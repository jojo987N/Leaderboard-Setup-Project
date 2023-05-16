import Score from './score.js';

export default class List {
  static render(store) {
    return store.length ? `${store.map((score, i) => (new Score(...Object.values(score))).render(i)).join('')}` : '<li>Empty List</li>';
  }
}