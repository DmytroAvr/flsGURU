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

//Циклы FOR и WHILE в JavaScript. Директивы break и continue

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