// literal means when something is set by code. for example, when we write a str variable.    The same happens when we write an object, it's a literal object.


let perro = {
  nombre: "Scott",
  color: "cafe",
  edad: 5,
  macho:true
};

//Accessing the values of the object.
console.info(perro.nombre);
console.info(perro.edad)

// Objects Methods

let gato = {
  nombre: "Gacelin",
  color: "Gris",
  edad: 5,
  macho:true,
  sonido: function (){
    return(`${this.nombre} puede maullar`)
  }
};

console.info(gato.sonido());

// inserting new fields to an object

gato.tamaño = "chikito";

console.log(gato.tamaño)

// updating fields:

gato.tamaño = "Grande"

console.log(gato.tamaño)

// deleting fields

delete gato.color

console.log(gato);

