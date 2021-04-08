class employee{
    constructor(name,id,number){
        this.name=name;
        this.id=id;
        this.number=number;
    }

getempname(){
   return this.name;
}

getempid(){
    return this.id;
}

getempnumber(){
    return this.number;
}


}

let a1=new employee("lithesh",101,6522776);
console.log(a1.getempname());
console.log(a1.getempid());
console.log(a1.getempnumber());