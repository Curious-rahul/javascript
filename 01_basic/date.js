let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let mycreateDate = new Date(2024,0,4)
mycreateDate = new Date(2024,0,4,6,8)
mycreateDate = new Date("03-01-2024")
console.log(mycreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(mycreateDate);
console.log(myTimeStamp);

console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

