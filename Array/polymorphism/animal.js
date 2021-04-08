class animal{
    constructor(name){
    this.name=name
}
eats(){
    console.log (this.name  +   ' eats biscuits')
}
}

class cat extends animal{
    eats(){
        super.eats();
        console.log (this.name  +   ' eats fishes')
}
}
let a1=new cat('meow');
a1.eats();
