let quest = prompt('Введите ваше имя')
let born = +prompt('Введите год вашего рождения');
let now = +prompt('Введите настоящий год');

let sum = 0

function res() {
 let sum = now - born ;
 alert(quest + ',' + ' ваш возраст ' + sum )
} 
 res()
