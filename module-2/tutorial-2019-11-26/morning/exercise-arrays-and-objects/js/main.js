"use strict";

const promos = {
  results: [
    {
      name: "Ada",
      students: [
        {
          id: "id-1",
          name: "Sofía",
          age: 20
        },
        {
          id: "id-2",
          name: "María",
          age: 21
        },
        {
          id: "id-3",
          name: "Lucía",
          age: 22
        }
      ]
    },
    {
      name: "Borg",
      students: [
        {
          id: "id-4",
          name: "Julia",
          age: 23
        },
        {
          id: "id-5",
          name: "Tania",
          age: 24
        },
        {
          id: "id-6",
          name: "Alaia",
          age: 25
        }
      ]
    },
    {
      name: "Clarke",
      students: [
        {
          id: "id-7",
          name: "Lidia",
          age: 26
        },
        {
          id: "id-8",
          name: "Celia",
          age: 27
        },
        {
          id: "id-9",
          name: "Nadia",
          age: 28
        }
      ]
    }
  ]
};

// Ada, Sofía
// Ada, María
// ...
// Ada, Nadia

console.log(promos);
console.log(promos.results);

for (const promo of promos.results) {
  // console.log(promo);
  // console.log(promo.name);
  // console.log(promo.students);
  for (const student of promo.students) {
    // console.log(student);
    // console.log(student.name);
    console.log("Bueno:", promo.name, student.name);
  }
}
