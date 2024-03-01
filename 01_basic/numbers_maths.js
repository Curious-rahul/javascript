const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);

const number = 123.8674
console.log(number.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

//********************************Maths*************************

console.log(Math.abs(-5));
console.log(Math.round(5.9));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min =1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min);