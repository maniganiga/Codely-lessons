// const name = 'Enkhmunkh'
// const aje ='16'

//  console.log('Sain baina uu namaig ' + name + ' gedeg . Bi ' +aje+ ' nastai.')

// console.log('hello','string')
// console.log(true, 'boolean'  )
// console.log("Name", 'variable'  )
// console.log(33, 'number' )
// console.log("90", 'string'  )
// console.log(90+"77", 'number and string' )
// console.log( {name:'Anu', age:15}, 'object' )
// console.log(false, 'boolean' )
// console.log(1655/5, 'number' )
// console.log(["javascript", "html", "css"] ,'array')
// let x= 'water'
// let y= 'cola'
// let z= 'sprite'
// let w;
// w=x;
// x=y;
// y=z;
// z=w;
// console.log(x,y,z);
// let b=6;
// let c=3;
// let d=2;
// let a=b*c-d;
// console.log(a);
// let day=2*24;
// let time=10;
// let totaltime=day+time;
// console.log(totaltime);
// let bornyear=2008;
// let futureyear=2099;
// let age =futureyear-bornyear;
// console.log(age);
// let birthdate=2008 ;

// let bornmonth=1*31;
// let bornday=20;

// let today=2024;
// let days=(today-birthdate)*365+bornmonth+bornday
// console.log(days);

// let too = 5678
// // 4
// let g=too%10;
// console.log('g='+g);

// // 30
// let h=too%100-g;
// console.log('h='+h);

// let j=(too%1000-h-g);
// console.log(j);

// let k=too%10000-j-h-g;
// console.log(k);

// let answer= g*1000 +h*10+j/10+k/1000;
// console.log(answer);

// 2ND HICHEEL

// let a =1
// let b = 78
// if (a>b) {
//     console.log('a is more');

// } else {
//     console.log('b is more');
// }

// let x = 5781
// if (x%2===0) {
//     console.log('is even');

// } else {
// console.log('is odd');
// }

// let newpassword= '69'
// let confirmnewpassword= '69'
// if (newpassword===confirmnewpassword) {
//     console.log('password passed');

// } else {
//     console.log('denied pass');
// }
// let grade = '0'
// if (grade>=90) {
//     console.log("a");
// }else if (grade<=89 &&grade >=80){
//     console.log('b');

// }
// else if (grade<=79 &&grade>=70){
//     console.log('c');

// }
// else if (grade<=69 &&grade>=60){
//     console.log('d');

// }
// else {
//     console.log('f');

// }

// let piecofshitnumber = "shd"
// if (piecofshitnumber%3===0 && piecofshitnumber%5===0) {
//     console.log('shitzngiggles');

// }
//       else if (piecofshitnumber%3===0 && piecofshitnumber%5>=1) {
//       console.log('shitz');

// }
// else if (piecofshitnumber%3>=1 && piecofshitnumber%5===0) {
//     console.log('giggles');

//  }
// else if (piecofshitnumber%3>=1 && piecofshitnumber%5>=1) {
//     console.log('buuz');

//  }
//  else {
//     console.log('gigglesnshitz');

//  }
// let fastnfurious = Number(prompt("numb"));
// let fastnfuriousspeed = 80;
// let speedanswer = (fastnfurious - fastnfuriousspeed) / 5;
// console.log(speedanswer);

// if (speedanswer >= 5) {
//   console.log("your license is revoked");
// } else {
//   console.log("you good fam ");
// }

// 3nd HICHEEL
// let w =  prompt('ta too bichnuu')
// for (let i = 1; i <= w; i = i +1) {
// console.log('Codely N' +i);
// }
// console.log('done');

// let n = prompt('Ta number put it hii')
// for (let i = n; i >=1; i--) {
//     console.log(i);

// }
// let n = prompt('number')
// let nilber = 0
// for (let i = 1; i <=n ; i= i +1) {
// nilber+= i ;
//  console.log(nilber);

// }
// alert(nilber)

// let n=prompt("number please")
// let niilber = 0
// for (let i = 1; i <= n ; i++) {
//   if (i%2==0) {
//     niilber += i
//   }
// console.log(niilber);

// }
// alert ( niilber)

// let n=prompt("number please")
// let nliber=0
// for (let i = 1; i <= n; i++){

// if (i%3==0 || i%5==0) {
//     nliber += i
// }
// console.log(nliber);

//     }
// alert(
//     nliber
// )

// 4rd hicheel?

// for (let i = 0; i <= 3; i=i+1) {
// if (i===2)
//     break;
// console.log(i);
// }

// for (let i = 0; i <= 3; i=i+1) {
//     if (i===2)
//         continue;
//     console.log(i);
//     }
// let n = prompt('word')
// for (let i = 1; i <=n; i++) {
//      if (i%3==0)
//     continue;
// console.log(i);

// }
// let n = prompt('number')
// let urjver = 1
// for (let i = 1; i <=n; i=i+1) {
//     urjver=urjver*i;
//     console.log(i);

// }
// console.log(urjver);
// alert(urjver)
// let n = prompt('number')
// let s = "*"
// for (let i = 1; i <=n; i++) {
//     console.log(s);
//     s = s + "*"
// }
// let n = Number(prompt('number'))

// for (let i = 2; i < n; i+=1) {
//    let isPrime = true

//    for (let a = 2; a < i; a++) {
//       if (i % a == 0) {
//          isPrime = false
//          break
//       }
//    }
//  if (isPrime) {
//    console.log(i)
//  }

// }
// let n = Number(prompt("numb"));
// for (let i = 2; i < n; i++) {
//   let isPrime = true;
//   for (let a = 2; a < i; a++) {
//     if (i % a == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }
// 5rd h=cheel
// let numbs = [1, 2, 3];
// numbs.push(4);
// console.log(numbs);

// // apple , orange , kiwi

// bold,bataa,nomin

// 10,20,30,35

// yellow,red,green,blue

// let fruits = prompt("gimme fruits");
// let array = fruits.split(",");
// console.log(array);

// let fruits = prompt("gimme fruits");
// let array = fruits.split(",");
// array.push("banana");
// // console.log(array);

// let arraya = [];
// arraya.push(1, 2, 3);
// console.log(arraya);

// let ayay = prompt("gimme names and ill give you blood");
// let arriye = ayay.split(",");
// console.log(arriye);
// let blood = arriye.indexOf("nomin");
// console.log(blood);
// alert(blood);

// let arriiya = prompt("numbers");
// let ariri = arriiya.split(",");
// console.log(ariri);
// let death = ariri.indexOf("40");
// if (death == -1) {
//   console.log(death);

//   alert("none");
// } else {
//   console.log(death);

//   alert("isso");
// }

// let arriiya = prompt("numbers");
// let ariri = arriiya.split(",");
// console.log(ariri);
// let forty = prompt("lemme find a num");
// let death = ariri.indexOf(forty);
// if (death == -1) {
//   alert("none");
// } else {
//   alert("isso");
// }

// let color = prompt("gogogo go pop go");
// let colors = color.split(",");
// console.log(colors);
// colors.pop();
// console.log(colors);

// alert(colors);
