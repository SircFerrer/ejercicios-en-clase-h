'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

const isWinner = (acc, user) => {
  if (user.time < acc.time) {
    return user;
  } else {
    return acc;
  }
};

// esto es lo mismo de arriba pero en una sola línea
// const isWinner = (acc, user) => user.time < acc.time;

const winner = runners.reduce(isWinner);

// eslint-disable-next-line no-console
console.log('The winner is...', winner);