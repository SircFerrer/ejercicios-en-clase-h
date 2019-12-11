/* eslint-disable no-console */
'use strict';

class Auto {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  printPosition() {
    console.log(`El auto ${this.name} ha avanzado ${this.distance} metros`);
  }
}

class Car extends Auto {
  move(distance = 0) {
    this.distance += distance;
  }
}

class Moto extends Auto {
  move(distance = 0) {
    if (distance >= 0) {
      this.distance += distance;
    } else {
      console.error('Las motos no tienen marcha atrás');
    }
  }
}

const myCar = new Car('Opel');
myCar.move(10);
myCar.printPosition();
myCar.move(10);
myCar.printPosition();

const myMoto = new Moto('Vespa');
myMoto.move(10);
myMoto.printPosition();
myMoto.move(-10);
myMoto.printPosition();