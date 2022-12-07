'use strict'
/*
let a = 0;
 
console.log( 0 && 58 || 18 && !!a++);
console.log(a);
console.log(!!--a);
console.log(a);
*/


//if (10 > 8) {
//	console.log('1');
//} else if (2 > 1) {
//	console.log('2');
//}

//console.log(!!false && 11 || !!'1' && 18);

//let name = 0;
//console.log(name ?? "щось");

//6 LES


//lesson 7
console.log('		lesson 7');
console.log('	Циклы FOR и WHILE в JavaScript. Директивы break и continue');
//lesson 7
//

//1.1
		//for (let i = 1; i < 5; i++) {
for (let i = 4; i < 5; i++) {
	let counter = i;
	console.log(counter);
}
//1.2
	//let printTo4 = 1;
	//while (printTo4 < 5) {
	//	console.log(printTo4);
	//	printTo4++;
	//}

//2 
		//let num = 8;
let num = 1;
while (num) {  //work if true 0-false
	console.log('while: ' + num);
	--num;
}
//3
		//let numWhile = 0;
let numWhile = 2;
while (numWhile < 3) { 
	console.log('numWhile: ' + numWhile);
	numWhile++;
}
//4
MarkFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
			if (size == 1) {
				break MarkFor;
			}
	}
}
//=====================================================================

//lesson 8
// https://www.youtube.com/watch?v=tiHvPGOX5yc
console.log('		lesson 8');
console.log('	Числа в JAVASCRIPT. Тип данных number. Работа с числами. проблема неточных вычислений.');
//lesson 8

//1    100.499999999 + Number.EPSILON = 100.5000000000000001
			// *додавати завжби коли хочемо укруглення часток в більшу сторону !.?
let numOne = Math.round((1.005 + Number.EPSILON)* 100) / 100;
console.log(numOne);

//2 
let value = '325.22px';
console.log(parseFloat(value));

//3 
let valueNan = 58 + "string";
if (isNaN(valueNan)) {
	console.log('it\'s NaN');
}

				//4 
console.log(Math.max(10, 58, 39, -150, 0));

				//5 
console.log(Math.floor(58.285));


//=====================================================================

//lesson 9
// https://www.youtube.com/watch?v=jc5Upe8xIN0
console.log('		lesson 9');
console.log('	Строки в JAVASCRIPT. Тип данных string. Типы кавычек, поиск, регистр и получение подстроки.');
//lesson 9

//2
let text = 'фрилансер';
console.log(text[text.indexOf('н')]);

//4
console.log(text.toUpperCase());

//5
console.log(text.includes("лан"));

let arrChar = [];
for (let char of text) {
	if (char === 'л') { arrChar.push(char); }
	else if (char === 'а') {arrChar.push(char);}
	else if (char === 'н') {arrChar.push(char);}
}
console.log(arrChar.join(''));