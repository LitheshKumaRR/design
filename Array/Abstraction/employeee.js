function employee(name,age,basesalary){
    this.age=age;
    this.name=name;
    this.basesalary=basesalary;

    let monthlybonus=1000

    let calculatefinalsalary=function(){
        finalsalary=basesalary+monthlybonus;
        console.log('final salary is :'+finalsalary);
    }


    this.getempdetails=function(){
        console.log('name:'+this.name,'age:'+this.age);
        calculatefinalsalary();
    }
}
let a1= new employee("Lithesh",21,26000);
a1.getempdetails();