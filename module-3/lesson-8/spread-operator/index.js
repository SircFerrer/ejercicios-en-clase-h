///SPREAD OPERATOR EN OBJETOS
//consolea un objeto clonado y pisa su propiedad edad con la nueva
console.log({...object, edad:36})

//consolea el objeto original veo que la edad no ha variado
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