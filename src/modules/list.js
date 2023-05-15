export default class List {
    constructor(){
        this.store = []
    }
    add(score){
      this.store.push(score)
    }
    render(){
        return `<ul class="list">`+this.store.map((score, i) => score.render(i)).join("")+`</ul>`
    }
}