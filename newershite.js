const name = 'Enkhmunkh'
const aje ='16'

 console.log('Sain baina uu namaig ' + name + ' gedeg . Bi ' +aje+ ' nastai.')

console.log('hello','string')
console.log(true, 'boolean'  )
console.log("Name", 'variable'  )
console.log(33, 'number' )
console.log("90", 'string'  )
console.log(90+"77", 'number and string' )
console.log( {name:'Anu', age:15}, 'object' )
console.log(false, 'boolean' )
console.log(1655/5, 'number' )
console.log(["javascript", "html", "css"] ,'array')
let x= 'water'
let y= 'cola'
let z= 'sprite'
let w;
w=x;
x=y;
y=z;
z=w;
console.log(x,y,z);
let b=6;
let c=3;
let d=2;
let a=b*c-d;
console.log(a);
let day=2*24;
let time=10;
let totaltime=day+time;
console.log(totaltime);
let bornyear=2008;
let futureyear=2099;
let age =futureyear-bornyear;
console.log(age);
let birthdate=2008 ;

let bornmonth=1*31;
let bornday=20;

let today=2024;
let days=(today-birthdate)*365+bornmonth+bornday
console.log(days);

let too = 5678
// 4
let g=too%10;
console.log('g='+g);

// 30 
let h=too%100-g;
console.log('h='+h);

let j=(too%1000-h-g);
console.log(j);

let k=too%10000-j-h-g;
console.log(k);

let answer= g*1000 +h*10+j/10+k/1000;
console.log(answer);
