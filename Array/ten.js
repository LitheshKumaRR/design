class BankAccount {
    min_Bal = 500;
    constructor(acc_No, acc_Name, age, amount) {
      this.acc_No = acc_No;
      this.acc_Name = acc_Name;
      this.age = age;
      this.amount = amount;
    }
  
    deposit() {}
  
    withdraw() {
      console.log(
        `${this.acc_Name} can withdraw only :  ${this.amount - this.min_Bal}`
      );
    }
    getBal() {
      console.log(`${this.acc_Name} - your account Bal is ${this.amount}`);
    }
  }
  let c1 = new BankAccount(101, "kavitha", 24, 1000);
  
  c1.withdraw();
  c1.getBal();