const {crearArchivo} =require('./funciones/multiplicar');
require('colors');

const parametros=require('yargs').argv

console.clear();
console.log(process.argv);
console.log(parametros);
const base=parametros.base;

crearArchivo(base)
    .then(res=>console.log(res.rainbow))
    .catch(res=>console.log(res))
