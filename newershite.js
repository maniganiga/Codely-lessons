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

// apple,banana,orange,grape

// bold,bataa,nomin

// 10,20,30,35

// yellow,red,green,blue

// zebra,lion,hippo,giraffe,penguin

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
// let zoo = prompt("enter animals");
// let madagascar = zoo.split(",");
// console.log(zoo);
// madagascar.splice(0, 2);
// alert(madagascar);
// console.log(madagascar);

// let nump = prompt("enter numbers");
// let numm = nump.split(",");
// numm.splice(0, 5);
// console.log(numm);
// alert(numm);

// let staray = prompt("enter fruits");
// let bowl = staray.split(",");
// console.log(bowl);
// let slicedfruit = bowl.slice(1, 4);
// console.log(slicedfruit);
// alert(slicedfruit);

// const numferr = [1, 2, 3];
// const fo = 4;
// let newnumbers = [...numferr, fo];
// console.log(newnumbers);
// alert(newnumbers);

// let cuh = prompt("number");
// let pluh = prompt("whatever");
// let bruh = cuh.split(",");
// let brut = pluh.split(",");
// console.log(bruh, brut);
// let all = [...bruh, ...brut];
// console.log(all);
// alert(all);
// 6rd hicheel
// const cars = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz"];
// for (let i = 0; i < cars.length; i++) {
//   cars[i] += "-Car";
//   console.log(cars[i]);
// }

// let numbers = prompt("waahh");
// let nul = numbers.split(",");
// console.log(nul);
// for (let i = 1; i <= nul.length; i++) {
//   console.log(i);
// }

// let ay = prompt("numbers");
// let yaa = ay.split(",");
// let ugh = [];
// console.log(yaa);
// for (let i = 0; i <= yaa.length; i++) {
//   if (yaa[i] % 3 === 0) {
//     console.log(i);
//     ugh.push(yaa[i]);
//     console.log(ugh);
//   }
// }
// if (ugh.length == 0) alert("no number divisible");
// else alert(ugh);

// let pro = prompt("enter numbers");
// let splitter = pro.split(",");
// let answer = [];
// console.log(splitter);
// for (let i = 0; i <= splitter.length; i++) {
//   if (splitter[i] % 3 == 0 || splitter[i] % 5 == 0) {
//     continue;
//   } else {
//     console.log(i);
//     answer.push(splitter[i]);
//     console.log(answer);
//   }
// }
// if (answer.length == 0) {
//   alert("none");
// } else alert(answer);
// let word = prompt("ug");
// word = word.split("");
// console.log(word);
// let alph = [
//   "+",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let answer = [];
// for (let i = 0; i < word.length; i++) {
//   console.log(i);

//   answer.push(alph.indexOf(word[i]));
// }
// console.log(answer);
// alert(answer);

// let letter = prompt("enter grade").toUpperCase();

// const students = [
//   { name: "Alice", point: 90 },
//   { name: "Bob", point: 55 },
//   { name: "Charlie", point: 78 },
//   { name: "David", point: 22 },
//   { name: "Eve", point: 68 },
//   { name: "Frank", point: 36 },
//   { name: "Grace", point: 95 },
//   { name: "Hannah", point: 89 },
//   { name: "Ivy", point: 83 },
//   { name: "Jack", point: 41 },
//   { name: "Katie", point: 87 },
//   { name: "Mia", point: 79 },
//   { name: "Liam", point: 84 },
//   { name: "Noah", point: 93 },
//   { name: "Olivia", point: 86 },
//   { name: "Peter", point: 57 },
//   { name: "Quinn", point: 94 },
//   { name: "Ryan", point: 80 },
//   { name: "Sophia", point: 75 },
//   { name: "Tyler", point: 46 },
// ];
// console.log(students);
// let box = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].point <= 100 && students[i].point >= 90 && letter == "A") {
//     box.push(students[i].name);
//   }
// }
// console.log(box);

// let letter = prompt("enter prompt").toUpperCase();

// const students = [
//   { name: "Alice", point: 90 },
//   { name: "Bob", point: 55 },
//   { name: "Charlie", point: 78 },
//   { name: "David", point: 22 },
//   { name: "Eve", point: 68 },
//   { name: "Frank", point: 36 },
//   { name: "Grace", point: 95 },
//   { name: "Hannah", point: 89 },
//   { name: "Ivy", point: 83 },
//   { name: "Jack", point: 41 },
//   { name: "Katie", point: 87 },
//   { name: "Mia", point: 79 },
//   { name: "Liam", point: 84 },
//   { name: "Noah", point: 93 },
//   { name: "Olivia", point: 86 },
//   { name: "Peter", point: 57 },
//   { name: "Quinn", point: 94 },
//   { name: "Ryan", point: 80 },
//   { name: "Sophia", point: 75 },
//   { name: "Tyler", point: 46 },
// ];
// console.log(students);
// let box = [];
// for (let i = 0; i < students.length; i++) {
//   if (
//     students[i].point <= 100 &&
//     students[i].point >= 60 &&
//     letter == "TENTSSEN"
//   ) {
//     box.push(students[i].name);
//   }
// }
// console.l0og(box);

// // NEW HICHEEL FUNKTZ

// const lol = () => {
//   console.log("wtf bro");
// };
// lol();

// const wallahi = (b, c, d) => {
//   let a = b * c - d;
//   return a;
// };
// console.log(wallahi(5, 10, 3));

// const totaltime = (day, hour) => {
//   x = day * 24;
//   return x + hour;
// };
// console.log(totaltime(2, 4));

// const bigga = (a, b) => {
//   if (a < b) {
//     return b + " bigger too ";
//   } else if (a > b) {
//     return a + " bigger too ";
//   } else;
//   return "equal";
// };
// console.log(bigga(10000000, 1000));

// const area = (l, w) => {
//   return "Talbai= " + l * w;
// };
// console.log(area(20, 30));

// const checkpoint = (score) => {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80 && score <= 89) {
//     return "B";
//   } else if (score >= 70 && score <= 79) {
//     return "C";
//   } else if (score >= 60 && score <= 69) {
//     return "D";
//   } else if (score < 60) {
//     return "F";
//   }
// };
// console.log("SHit is " + checkpoint(50));

// const numbers = [3, 8, 1, 12, 30, 5, 7];

// const biggestnum = (numbers) => {
//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// };
// console.log("Largest number is:", biggestnum(numbers));

// const ogarray = [1, 2, 3, 4, 5];

// const reversal = () => {
//   pox = [];
//   for (let i = ogarray.length; i > 0; i--) {
//     let a = ogarray.pop();
//     pox.push(a);
//   }
//   return pox;
// };
// console.log("cursed technique reversal red:", reversal(ogarray));

// function bubbleSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// // Example usage:
// const unsortedArray = [5, 3, 8, 1, 2, 3, 5];
// const sortedArray = bubbleSort(unsortedArray);

// console.log(sortedArray); // Output: [1, 2, 3, 3, 5, 5, 8]

// const unarray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sorter = ()=>{
// for (let i = 0; i < unarray.length; i++) {

// }
// return
// }
// console.log("Here ya go ",sorter(unarray));

// FUNKTZ 2

// let number = prompt("enter number");
// const ispalindrome = (number) => {
//   let num1 = number.split("");
//   pox = [];
//   let poxx2 = 0;
//   for (let i = num1.length; i >= 0; i--) {
//     let a = num1.pop();
//     pox.push(a);
//     poxx2 = pox.join("");
//   }
//   if (poxx2 == number) {
//     alert("is palindrome");
//   } else {
//     alert("not");
//   }
//   return poxx2;
// };
// console.log(ispalindrome(number));

// let number = prompt("enter number");

// const ispalindrome = (number) => {
//   let num1 = number.split("");
//   let box = [];
//   for (let i = num1.length; i >= 0; i--) {
//     let a = num1[i];
//     console.log(a);
//     box.push(a);
//   }
//   f = box.join("");
//   if (f == number) {
//     alert("is palindrome");
//   } else {
//     alert("not");
//   }
//   return f;
// };
// console.log(ispalindrome(number));

let n = prompt("give number");
const tilpalindrome = (n) => {
  for (let i = 0; i < n; i++) {
    // ?
    let nlit = i.split("");
    let box = [];
    for (let j = i.length; j >= 0; j--) {
      box.push(nlit);
    }
    box = box.join("");
    if ((box = i)) {
      console.log(box);
    } else {
      continue;
    }
    return box;
  }
  return box;
};
console.log(tilpalindrome(n));
