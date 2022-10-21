let phrases = [
	"Звучит неплохо",
	"Да, это определенно надо сделать",
	"Не думаю, что это хорошая идея",
	"Может, не сегодня?",
	"Компьютер говорит нет"
];
console.log(phrases[Math.floor(Math.random() * phrases.length)]);


//

let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
	// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
	// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
	// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
	// Соединяем случайные строки в предложение:
let randomInsult = `У тебя ${randomBodyPart} словно ${randomAdjective}  ${randomWord}!!!`;
console.log(randomInsult);
// or
let randomInsultArr = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
console.log(randomInsultArr);




//hw rofl
let bodyParts = ["рука", "нога", "голова", "хвост", "кочерыжка"];
let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let adjectives = ["большая", "кривая", "страшная", "плоская"];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let animalParts = ["хвост", "рог","копито", "хобот"];
let animalPart = animalParts[Math.floor(Math.random() * animalParts.length)];
let animals = ["кота", "собаки", "слона", "ослаж", "крота"];
let animal = animals[Math.floor(Math.random() * animals.length)];
let say = `У тебя ${bodyPart} еще более ${adjective}, чем ${animalPart} у ${animal}`;
let sayArr = ["У тебя", bodyPart, "еще более", adjective + ",", "чем", animalPart, "у", animal].join(" ");
console.log(say);
console.log(sayArr);
//rofl hw
let arrEx = [3, 2, 1];
console.log(arrEx.join(" больше, чем "));
//end hw


