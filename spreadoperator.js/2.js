var car = {
    model: "bmw",
    color: "red",
    price: 2000,
  };
  console.log(car);
  
  let newCar = JSON.stringify(car);
  console.log(newCar);
  let parseCar = JSON.parse(newCar);
  console.log(parseCar);
  