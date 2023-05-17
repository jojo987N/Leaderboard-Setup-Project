import AddScore from './modules/addScore.js';
import Game from './modules/game.js';
import List from './modules/list.js';
import RecentScores from './modules/recentScores.js';
import Score from './modules/score.js';
import Store from './modules/store.js';
import './style.scss';
import Animation from './modules/animation.js';

export const URL_BASE = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const animation = new Animation();
const refresh = document.querySelector('.refresh');

animation.render();

(async () => {
  const game = localStorage.getItem('game') || (await (await Game.init('Pokemon')).json()).result.slice(14, 34);
  localStorage.setItem('game', game);

  document.querySelector('.submit').onclick = (e) => {
    e.preventDefault();
    AddScore.add(new Score(), game);
    [...document.forms].find(() => true).reset();
  };
  refresh.onclick = async () => {
    RecentScores.render((await (await Store.get(game)).json()).result, List);
    animation.remove();
  };
  refresh.click();
})();
