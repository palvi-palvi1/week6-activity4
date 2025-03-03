// carManager.js
class CarManager {
    constructor() {
      this.cars = [];
      this.nextId = 1;
    }
  
    addCar(car) {
      car.id = this.nextId++;
      this.cars.push(car);
      return car;
    }
  
    deleteCar(id) {
      const index = this.cars.findIndex(car => car.id === id);
      if (index !== -1) {
        return this.cars.splice(index, 1)[0];
      }
      return false;
    }
  
    getCars() {
      return this.cars;
    }
  }
  
  module.exports = CarManager;