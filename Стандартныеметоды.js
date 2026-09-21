Поиск ошибок в коде со стандартными методами JavaScript
В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки. Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.

№1⊗jsPmSMMst

Код должен найти сумму цифр числа:

let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum);
№2⊗jsPmSMMst

Код должен найти сумму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum);
№3⊗jsPmSMMst

Код должен найти сумму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum = Number(digit);
}

console.log(sum); // почему-то выводит 5, а не 15
№4⊗jsPmSMMst

Код должен найти сумму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = '';
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);
№5⊗jsPmSMMst

Код должен найти произведение цифр числа:

let num = 12345;
let arr = String(num).split('');

let prod = 0;
for (let digit of arr) {
	prod *= digit;
}

console.log(prod);