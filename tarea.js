//Diseñe una cadena de caractyeres. Se pide diseñar la funcion que 
//devuelva la cadena sin consolnantes
//Ejemplo: Hola Esmeraldas
//resulrado: oa eeaa
//Utilice Filter
console.log ("");
console.log ("Se pide diseñar la funcion que devuelva la cadena sin consolnantes");
const palabra = "Segundo semestre";
function SinConSonantes(palabra) 
{
    const vocales = "aeiouAEIOU";
    return palabra.split("").filter(function(letras) {return vocales.indexOf(letras) !== -1;}).join("");
}
console.log(SinConSonantes("Hola a todos"));
console.log(SinConSonantes("Milexy"));
console.log(SinConSonantes("Materiales"));
console.log("Frase original:", palabra);
console.log ("Frase sin consonates:", SinConSonantes(palabra));

// 2)Determine si todos los elementos de la siguiente matriz son positivos
console.log ("");
console.log ("Numeros positivos");
const matrizNum=[[1,2,3,4],[4,5,6,7],[7,8,9,10]];
const Npositivos = matrizNum.every(elementos => {return elementos.every(num => num > 0);});
console.log("Hay numeros positivos en el vector?", Npositivos);
