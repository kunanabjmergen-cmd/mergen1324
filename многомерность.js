Добавление элементов в многомерные массивы JavaScript
Пусть у нас есть вот такой массив с юзерами:

let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];
Давайте добавим в этот массив еще одного юзера. Для этого параметром метода push передадим новый объект с юзером:

users.push({
	name: 'name4',
	surn: 'surn4',
});
№1⊗jsPmMuAEA

Добавьте в следующий массив еще одного работника:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];