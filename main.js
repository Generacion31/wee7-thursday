/*
 * objetos importa los key's
 * array importa las po sicione
 */

// Ejemplo de destructuración de objetos
const persona = { nombre: 'John', edad: 30, ciudad: 'Nueva York', estado: 'casado' };


const name = persona.nombre
const age = persona.edad
const city = persona.ciudad

const { nombre, edad, name1, ...rest } = persona
console.log(nombre); //john
console.log(edad); //30
console.log(rest); // {ciudad: 'Nueva York', estado: 'casado'}
console.log(name1); //undefined

// Ejemplo de destructuración de arreglos
const colores = ['rojo', 'verde', 'azul', 'green'];
const [red, green, ...resto] = colores
console.log(red); //rojo
console.log(green); //verde
console.log(resto); // ['azul', 'green']

const [color1, , color3] = colores
console.log(color1); //rojo
console.log(color3); //azul

const [colorRojo, ...restosDeColores] = colores
console.log(colorRojo);//rojo
console.log(restosDeColores); //['verde', 'azul', 'green']


// Ejemplo del operador spread
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

const newArray = [...arreglo1, ...arreglo2]
console.log(newArray);

// Ejemplo de forEach
const numeros2 = [1, 2, 3, 4, 5];


// Ejemplo de reduce
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 5)
const suma2 = numeros.reduce((a, b) => a + b) //15
console.log(suma);//15



// Ejemplo de map
const arrayMap = numeros.map((numero) => numero * 2)
console.log(arrayMap);


// Ejemplo de filter
const personas = [
  { nombre: "Alice", edad: 25 },
  { nombre: "Bob", edad: 30 },
  { nombre: "Carol", edad: 28 },
  { nombre: "David", edad: 35 },
  { nombre: "Eve", edad: 22 }
];

const users = personas.filter((persona) => persona.edad > 25 && persona.edad > 32) //findAll

/** Lo que nos resuelve el filter
 * 1- crear el array vacio
 * 2- hacer el for
 * 3-hacer el if con la condicion
 * 4 pushear
 */
console.log(users);

// Ejemplo de find -> devuelve el primero que encuentra

const search = personas.find((perrsona) => perrsona.edad > 25) //findOne - findByPk
console.log(search);


//Funciones regulares / tradicionales
function saludar(nombre) {
  console.log(`Hola, soy ${nombre}`);
}
saludar('Andres')
saludar('Esteban')

// Ejemplo de funciones flecha
const saludar2 = (name) => console.log(`${name}, se va al modulo de react`);
saludar2('Jorge')



const sumar = (array) => {
  const value = array.reduce((acumulador, valor) => acumulador + valor, 0)
  return value
}

console.log(sumar([1, 2, 3]));



