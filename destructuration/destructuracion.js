// destructuration is a great feature that allows to separate keys or values from an object into different variables in order to improve the comprensibility of code.

const superhero = {
  name : "Captain America",
  age: 30,
  weight: 100,
  job: "Marvel"
}


const {name, age, weight, job} = superhero;
console.log(`${name} has ${age} years old, weights ${weight} Kg and works for ${job}`);

// ** IMPORTANT: 
// When destructuring an object, it's mandatory to name the variables just as the original keys. However, the writing order of the variables is not important.

// ** Destructurate only what you need **

// Keys can be renamed::::

const superVillano = {
  nombre : "Dr. Octopus",
  edad: 47,
  peso: 270,
  empresa: "Self-employed"
}

const {nombre, edad, peso, empresa:marca} = superVillano;
console.log(`${nombre} has ${edad} years old, weights ${peso} Kg and works as ${marca}`);

// Destructuration allows default values:

const pangacelin = {
  gatoPeso : 4,
  gatoEdad : 5,
  gatoEmpresa : "Self-Employed"
};

const {gatoNombre = "Pangacelino", gatoEdad, gatoPeso, gatoEmpresa} = pangacelin

console.log(`${gatoNombre} tiene ${gatoEdad} años, pesa ${gatoPeso} kg y es ${gatoEmpresa}`)

// Keys can also be renamed and have a default value.