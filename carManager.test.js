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
    const car1 = { make: 'Toyota', model: 'Camry' };
    const car2 = { make: 'Honda', model: 'Civic' };
    const addedCar1 = carManager.addCar(car1);
    const addedCar2 = carManager.addCar(car2);

    const deletedCar = carManager.deleteCar(addedCar1.id);
    expect(deletedCar).toEqual(addedCar1);
    expect(carManager.getCars()).not.toContain(addedCar1);
    expect(carManager.getCars()).toContain(addedCar2);
  });

  it('should return false when deleting a non-existing car', () => {
    const car1 = { make: 'Toyota', model: 'Camry' };
    const addedCar1 = carManager.addCar(car1);

    const result = carManager.deleteCar(999);
    expect(result).toBe(false);
    expect(carManager.getCars()).toContain(addedCar1);
  });

  it('should update the array correctly after deletion', () => {
    const car1 = { make: 'Toyota', model: 'Camry' };
    const car2 = { make: 'Honda', model: 'Civic' };
    const car3 = { make: 'Ford', model: 'Mustang' };

    const addedCar1 = carManager.addCar(car1);
    const addedCar2 = carManager.addCar(car2);
    const addedCar3 = carManager.addCar(car3);

    carManager.deleteCar(addedCar2.id);

    const remainingCars = carManager.getCars();
    expect(remainingCars).not.toContain(addedCar2);
    expect(remainingCars).toContain(addedCar1);
    expect(remainingCars).toContain(addedCar3);
    expect(remainingCars.length).toBe(2);
  });
});
