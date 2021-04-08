const address=require('./address')
class operation{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
    }
}
let v1= new operation("lithesh",1000,new address("kaggdaspura","bangalore",560093))
/* module.exports=operation */
console.log(v1)