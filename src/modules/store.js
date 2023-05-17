import { URL_BASE } from '..';

export default class Store {
    static get = (game) => fetch(`${URL_BASE}games/${game}/scores/`)
}