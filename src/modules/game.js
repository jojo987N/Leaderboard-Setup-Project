import { URL_BASE } from '..';

export default class Game {
    static init = (name) => fetch(`${URL_BASE}games/`, {
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
}