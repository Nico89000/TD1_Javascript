/**
 * Created by canals on 25/01/2017.
 */
 'use strict'

 /*TD1*/
 /* exercice 1.1 */


// Fonction qui renvoie le minimum entre 2 chiffres
 console.log("Début du programme");
 function min(a,b) {
 	return Math.min(a, b);
 }

// Fonction qui renvoie le maximum entre 2 chiffres
 function max (a,b){
 	return Math.max(a, b);
 }

// Console.log de test pour les fonctions min et max
 console.log(min(1, 3));

 console.log(max(1, 3));

 function suitenombre(){

 	for (var number = 1; number <= 100; number++) {
    var message = number; // Message à afficher, initialement vide
    if (number % 3 === 0) {
        // Nombre divisible par 3 : on ajoute "wouueee" au message
        message += '-'+'wouueee';
    }
    if (number % 5 === 0) {
    	// Nombre divisible par 3 : on ajoute "wouueee" au message
    	message += '-'+'Yoooo';
    }
    	// Nombre = 73 : on ajoute "wouueee" au message
    if (number == 73) {
    	message +='-'+'Biinnngooo';
    }
    console.log(message);
}

}

suitenombre();

// Fonction power avec 2 paramatres
function power(x,n) {
	var power = 1;
	var i;
	if (n===0)
		return 1;

	for (i = 0; i < n; i++) {
		power *= x;
	}
	return power;
}


power(5,8);

// Fonction recursivité avec 2 parametres
function recursivite(x,n) {
	if(n===0)
		return 1;

	return x * recursivite(x,n-1);
}

function add(a,b) {
	return a+b;
}

let s = (a,b) => a+b;


function calculate(a,b,f) {
	return f(a,b);
}

//Fonction incrementer pour un nombre  
function incrementeur(x){
	return (a) => {return a+x;};
}

let incr10 = incrementeur(10);

//Fonction sequence 
function sequence(u0){
	let u = 0;
	while (u !== 10000){
	return (u0) => 

		u++;
	}
}

let next = sequence(10);

console.log("Exercice2 :");

// Fonction creer multiplicateur

function creeMultiplicateur(n){

	var i = 1;

	return (x)=> x * n;
}

var m5 = creeMultiplicateur(5);

// Fonction creation sequence avec 2 parametres
function creerSequence(init,step){
	init -= step;

	return () => {
		return init += step;
	}
}
let seq = creerSequence(2,2);

// Fonction fibonacci 
function fibonacci(u0, u1){
	return () => {
		var temp = u0; 
		u0 = u1;
		u1 = temp + u1;

		return temp;
	}
}
let fibo = fibonacci(1,2);



// Fonction creermultiplicateur2 qui permet de choisir avec le nombre d'arguments  
function creerMultiplicateur2(n){

	if (arguments.length === 2) {
		var x = arguments[1];
		return  n * x;

	}else if (arguments.length === 1 ){
		return (x) => x * n;
	}

}

// Fonction power2 qui permet de faire marcher la fonction avec le nombre d'arguments  
function power2(n){
	if (arguments.length === 2) {
		var x = arguments[1];
		return  recursivepower(x,n);

	}else if (arguments.length === 1 ){

		return (x) =>  recursivepower(x,n);
	}
}

// Fonction recursivepower qui permet d'etre appelé lorsque les arguments sont égaux à 1 
function recursivepower(x,n){
	if(n===0)
		return 1;

	return x * recursivepower(x,n-1);
}
//Fonction formatter qui renvoie les messages avec le nombre associé 
function formatter(nombre){

	return (message) => {
		return (nombre++ +" : "+ `${message}`);
	}
} 
// fonction ecrire qui écrit le message dans le log
function ecrire(message){
	console.log(message);
}

// fonction ecrireAlerte qui écrit le message dans le log
function ecrireAlerte(message){
	alert(message);
}


// fonction logger qui affiche les messages 
function logger(formatter,ecrire){
	return (message) => {
		ecrire(formatter(message));
	}
}



// Tests avec les console.log pour chacune des fonctions

console.log("Var power = "+power(5,8));
console.log("Var recursivité 1^4= "+recursivite(1,4));
console.log("Var recursivité 2^4 = "+recursivite(2,4));
console.log("Var recursivité 2^6 = "+recursivite(2,6));
console.log("Fin du programme de l'exercice 1");



console.log("Var incremente = "+incr10(5));
console.log("Var increment = "+incr10(10));

console.log(calculate(50,23,(a,b) => a-b));
console.log(calculate(50,23,s));

console.log("Multiplicateur : " +m5(5));
console.log("Multiplicateur : " +m5(10));

console.log("Question sur la Sequence");
for (var i = 0; i < 25; i++) {
	console.log(seq(2,2));
};
console.log("Suite de fibonacci");
for (var i = 0; i < 10; i++) {
	console.log(fibo());
};


console.log("creerMultiplicateur2 :"+ creerMultiplicateur2(2,7));
console.log("creerMultiplicateur2 :"+ creerMultiplicateur2(2)(7));

console.log("power2 :"+ power2(8,2));
console.log("power2 :"+ power2(8)(2));

var format = formatter(10);
format('le ciel est blanc');
format('la neige est bleue');

ecrire('le message');
ecrireAlerte('le message');
var logs = logger(formatter(1),ecrire);

logs('Hello world');
logs('Bonjour les amis');
logs('Comment ca va ?');
logs('Super !');