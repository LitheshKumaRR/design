class Address {
    constructor(address) {
      this.address = address;
    }
  }
  class BankCustomer extends Address {
    constructor(acc_No, name, age, address) {
      super(address);
      this.name = name;
    }
  }
  let b1 = new BankCustomer(101, "Kavitha", 24, {
    houseNo: 5,
    city: "Bangalore",
  });
  console.log(b1.address.city);
  