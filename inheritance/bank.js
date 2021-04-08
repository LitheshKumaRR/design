const address=require('../address')

class bank extends address{
    constructor(acc_name,acc_num,balance,address){
        super(address);
        this.acc_name=acc_name;
        this.acc_num=acc_num;
        this.balance=balance;
    }
}
let A1=new bank ("lithesh",1111111,15000,{area:"kaggdaspura",city:"bangalore",pincode:560093})
console.log(A1.address.city)
console.log(A1.address.area)