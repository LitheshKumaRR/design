class BankAccount {
    min_bal = 500;
    constructor(a, b, c) {
      this.acc_No = a;
      this.acc_Name = b;
      this.acc_Holder_Age = c;
    }
    open_Accoount() {
      console.log(
        `${this.acc_Name}  Account Opened Successfully and Min Bal: ${this.min_bal}`
      );
    }
  }
  let c1 = new BankAccount(1014343434343, "Rahul", 25);
  
  // Print Rahul Account
  console.log(c1.acc_No);
  c1.open_Accoount();
  
  let c2 = new BankAccount(105, "Teja", 22);
  c2.open_Accoount();