import { URL_BASE } from '..';

export default class AddScore {
    static add = (score, game) => fetch(`${URL_BASE}games/${game}/scores/`, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
}