import List from './modules/list';
import RecentScores from './modules/recentScores';
import Score from './modules/score';
import './style.scss';

const list = new List();

[100, 20, 50, 78, 125, 77, 42].forEach(score => {
    
    list.add(new Score("Name", score))
});


document.querySelector('.content-1').innerHTML = new RecentScores(list).render()