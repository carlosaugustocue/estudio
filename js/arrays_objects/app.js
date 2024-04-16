 
// let numbers = [1,2,3,4,5,6]

// console.log(numbers)
// console.log(numbers[7])
// numbers[2] = 10
// console.log(numbers.length)
// //numbers.length = 1
// //console.log(numbers)
// console.log(numbers.at(2))
// console.log(numbers)

//map
//filter
//reduce

//Crear un map y asignarle elementos
//New Map

let map = new Map()
map.set('name', 'Juan')
map.set('age', 25)
map.set('country', 'Colombia')
console.log(map)
console.log(map.get('name'))
console.log(map.has('name'))
console.log(map.delete('name'))
console.log(map.has('name'))
console.log(map.size)
// map.clear()

//crear un objeto con tres propiedades
let user = {
    name: 'Augusto',
    age: 40,
    country: 'Colombia',
    city: 'Bogota',
    phone: 123456
}

console.log(user)
