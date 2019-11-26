'use strict';

// función anónima y arrow

const add = (a, b) => {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
}

console.log('Resta:', sub(5, 1));

// función anónima

const paintResult = function () {
  const result = add(1, 2);
  console.log('Suma:', result);
};

// funcion nominal

function paintResult2 () {
  const result = add(1, 2);
  console.log('Suma:', result);
};

// scope o ámbito

const user = 'MC';
if (user === 'MC') {
  const isMC = true;
}

paintResult();
paintResult2();