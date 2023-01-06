// Функция - это часть какого либо кода который выполняет какое то действие или вычисление и его можно использовать в любо месте вашего кода

// function declaration

// function res() {
//     let sum = 10 + 30;
//     return sum
// } 

// function expression

// let res = function() {
//     let sum = 10 + 30;
//     return sum
// }

// console.log(res());


// function param(a,b,c,d = 100) {
//     let sum = a + b + c + d
//     return sum
// }
// console.log(param(10,20,30, 5));


// function all(min,max) {
//     let sum = 0;
//     for(let i = min; i < max; i++) {
//         sum += i
//     }
//     return sum    
// }

// console.log(all(1,10));
// console.log(all(50,100));


// Math.random() - Отдает рандомное число от 0 до 0.99999
// Math.floor() - округляет наше число до наименьшено целого
// Math.ceil() - округляет наше число до наибольшего целого
// Math.round() - округляет наше число по матем правилом

function random(min,max){
    return Math.floor(Math.random() * (max-min) +min )

}
let number = +prompt('Сколько примеров вы хотите ?');
let minimum = +prompt('Введите минимальное число:');
let maximum = +prompt('Введите максимальное число:');

for(i = 0; i < number; i++){

    let one = random(minimum,maximum)
    let two = random(minimum,maximum)
    let sign = random(0,4)
    

    if(sign == 0 ){
        let quest = +prompt(one + ' + ' + two + ' = ')
        let primer = quest == (one + two)? ' Молодец ' : ' Ошибка '
        alert(one + '+' + two + '=' + (one+two) + ' Правильный ответ ,' + 'А твой ответ: ' + quest + primer)
        
    }else if (sign == 1) {
        let quest = +prompt(one + ' - ' + two + ' = ')
        let primer = quest == (one - two)? ' Молодец ' : ' Ошибка '
        alert(one + '-' + two + '=' + (one-two) + ' Правильный ответ ,' + 'А твой ответ: ' + quest + primer)
    }else if (sign == 2) {
        let quest = +prompt(one + ' * ' + two + ' = ')
        let primer = quest == (one * two)? ' Молодец ' : ' Ошибка '
        alert(one + '*' + two + '=' + (one*two) + ' Правильный ответ ,' + 'А твой ответ: ' + quest + primer)
    }else if (sign == 3) {
        let quest = +prompt(one + ' / ' + two + ' = ')
        let primer = quest == (one / two)? ' Молодец ' : ' Ошибка '
        alert(one + '/' + two + '=' + (one/two) + ' Правильный ответ ,' + 'А твой ответ: ' + quest + primer)
    }
}



