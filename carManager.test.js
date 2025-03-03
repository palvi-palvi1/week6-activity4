// carManager.test.js
const CarManager = require('./carManager');

describe('CarManager', () => {
  let carManager;

  beforeEach(() => {
    carManager = new CarManager();
  });

  it('should add a car with a unique ID', () => {
    const car = { make: 'Toyota', model: 'Camry' };
    const addedCar = carManager.addCar(car);
    expect(addedCar.id).toBe(1);
    expect(carManager.getCars()).toContain(addedCar);
  });

  it('should delete a car by ID and return the deleted car', () => {
    const car1 = carManager.addCar({ make: 'Honda', model: 'Civic' });
    const car2 = carManager.addCar({ make: 'Ford', model: 'Mustang' });

    const deletedCar = carManager.deleteCar(car1.id);
    expect(deletedCar).toEqual(car1);
    expect(carManager.getCars()).not.toContain(car1);
    expect(carManager.getCars()).toContain(car2);
  });

  it('should return false when deleting a non-existing car', () => {
    const deletedCar = carManager.deleteCar(999);
    expect(deletedCar).toBe(false);
  });

  it('should update the array correctly after deletion', () => {
    const car1 = carManager.addCar({ make: 'Chevrolet', model: 'Malibu' });
    const car2 = carManager.addCar({ make: 'Nissan', model: 'Altima' });
    const car3 = carManager.addCar({ make: 'BMW', model: '3 Series' });

    carManager.deleteCar(car2.id);

    const cars = carManager.getCars();
    expect(cars).not.toContain(car2);
    expect(cars).toContain(car1);
    expect(cars).toContain(car3);
    expect(cars.length).toBe(2);
  });
});