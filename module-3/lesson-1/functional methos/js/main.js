'use strict';

const languages = [
  {
    name: 'html',
    frontEnd: true
  },
  {
    name: 'css',
    frontEnd: true
  },
  {
    name: 'node',
    frontEnd: false
  },
  {
    name: 'js',
    frontEnd: true
  }
];

// map

function getLanguageTitle(language) {
  if (language.frontEnd === true) {
    return `${language.name} is a front end language.`;
  } else {
    return `${language.name} is not a front end language.`;
  }
}

const frontEndLanguagesWithTitles = languages.map(getLanguageTitle);

console.log(frontEndLanguagesWithTitles);

// filter

const frontEndLanguages = languages.filter(language => {
  if (language.frontEnd === true) {
    return true;
  } else {
    return false;
  }
});

console.log(frontEndLanguages);

// reduce

const addNameToArray = (acc, language) => {
  acc.push(language.name);
  return acc;
};

const frontEndLanguagesNames = languages.reduce(addNameToArray, []);

console.log(frontEndLanguagesNames);

// sort

const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
};

const sortedLanguages = languages.sort(sortByName);

console.log(sortedLanguages);
