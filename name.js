const address=require('./address')
class bank{
    constructor(name,acc,age,lit){
        this.name=name;
        this.acc=acc;
        this.age=age;
        this.lit=lit;
    }
}
let c1= new bank("lithesh",123456,24,new address("kaggdaspura","bangalore"));
console.log(c1)