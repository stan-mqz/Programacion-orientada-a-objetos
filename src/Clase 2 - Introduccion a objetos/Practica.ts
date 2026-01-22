//Ejercicio 1
let persona = {
    nombre: 'Stan',
    edad: 25,
    activo: true
}

console.log(persona.nombre)
console.log(persona.edad)


//Ejercicio 2

let estudiante  = {
    nombre: 'Maria',
    carrera: 'Ingenieria',
    saludar() : void  {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

estudiante.saludar()

let producto : {
    nombre: string,
    precio: number,
    disponible: boolean
} = {
    nombre: 'Laptop',
    precio: 1200,
    disponible: true
}

console.log(producto.nombre)