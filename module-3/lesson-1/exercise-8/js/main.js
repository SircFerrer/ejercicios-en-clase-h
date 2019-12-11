'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

const isWinner = (acc, user) => {
  if (acc === null || user.time < acc.time) {
    return user;
  } else {
    return acc;
  }
};

const winner = runners.reduce(isWinner, null);

// eslint-disable-next-line no-console
console.log('The winner is...', winner);