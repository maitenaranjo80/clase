
 // var x = 1 + 9;
 // var y = "hola"+" mundo";
 // var z = true;
 // var v = 
 // console.log(x, y, z, v);
 // console.log(typeof x, typeof y, typeof z)


//
// var x = 5;
// var y = 3;
// console.log(x + y, x - y, x * y, x / y);


//
// var x = 45;
// console.log(x);
// var y = x++;
// console.log(y);


//
// var x = true;
// var y = false;
// console.log(x === x);
// console.log(x === y);
// console.log(x !== x);
// console.log(x !== y);


//
// var x = 4;
// var y = 6;
// console.log(x > y, x < y, x >= x)

// console.log(x < y && y > x);
// console.log(x < y || y < x);

// console.log(x < y ? 'si, es verdadero' : 'no, es falso')
// console.log(x > y ? 'si, es verdadero' : 'no, es falso')

// if(x > y){
// 	console.log("se ejecuta, verdadero")
// }else{
// 	console.log("se ejecuta, falso")
// }

// switch(x + y){
// 	case 8:
// 		console.log("es igual a 8");
// 		break;
// 	case 10:
// 		console.log("es igual a 10");
// 		break;
// 	default:
// 		console.log("es otro valor");
// }

// var nom = 'juan';

// switch(nom){
// 	case 'pedro':
// 		console.log("pedro");
// 		break;
// 	case 'juan':
// 		console.log("juan");
// 		break;	
// }


//ejemlos funciones
// function nombre (parametros){
// 	bloque codigo
// }

// var nombre = (parametro) =>{
// 	codigo
// }



//
// function nombreCompleto(nombre, apellido){
// 	console.log(nombre + " " + apellido)
// }

// nombreCompleto("Maite", "Naranjo");


//
function edad(AnioNac){
 	return 2018 - AnioNac;
 }

 console.log(edad(1980));


//1 opcion
if(edad(2015) >= 18){
	console.log("mayor de edad")
} else{
 	console.log("menor de edad")
}

//2 opcion
var edad = 35;
if(edad >= 18){
	console.log("mayor de edad")
} else{
	console.log("menor de edad")
}

//3 opcion
var edad = prompt("cuál es tu nombre?")

function anio(){
	if(edad >= 18){
		console.log("mayor de edad")
	} else{
		console.log("menor de edad")
	}
}

anio();
