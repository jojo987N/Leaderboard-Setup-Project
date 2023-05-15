export default class Score {
 
    constructor(name, score){
        this.name = name
        this.score = score;
    }

    render(i){
        return `
        <li class="${i%2 === 0 || "bg-grey"}">${this.name}: ${this.score}</li>
        `
    }
}