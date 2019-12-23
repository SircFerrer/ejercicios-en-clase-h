///SPREAD OPERATOR EN OBJETOS
const objeto = {
  name: 'maria',
  surname:'hojas',
  age:34
}

//consolea un objeto clonado y pisa su propiedad age con la nueva
console.log({...object, age:36})

//consolea el objeto original veo que la edad no ha variado en el original
console.log(object)
//////////

///SPREAD OPERATOR EN ARRAYS
//array original
const array = ['pepe','juan']
//clona mi array y le añade un último valor
const arraycopiado = [...array, 'josemari']
//con este array concateno arrays
const arraynuevo = ['lola','pepa','pili']

console.log(array)
console.log(arraycopiado)
console.log(...arraycopiado)
console.log([...array,...arraynuevo]) 