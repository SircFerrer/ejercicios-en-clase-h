'use strict';

const setCarProperty = (obj, property, value) => {
  obj[property] = value;
}

debugger;

const car = {}

console.log('Car properties:', car);

// esto es lo mismo que car.color = 'red';
setCarProperty(car, 'color', 'red');
console.log('Car properties:', car);

// esto es lo mismo que car.doors = 5;
setCarProperty(car, 'doors', 5);
console.log('Car properties:', car);

// esto es lo mismo que car.airbag = true;
setCarProperty(car, 'airbag', true);
console.log('Car properties:', car);

// esto es lo mismo que car.gasoil = '60%';
setCarProperty(car, 'gasoil', '60%');
console.log('Car properties:', car);

// esto es lo mismo que car.color = 'blue';
setCarProperty(car, 'color', 'blue');
console.log('Car properties:', car);
