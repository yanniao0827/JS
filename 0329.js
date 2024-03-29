小試1
let fruitSeller = {
    name: ['野原新之助'],
    age: 5,
    getInfo: function () {
        console.log('我是' + this.name + '今年' + this.age + '歲');
    },
    fruits: ['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya'],
    // 此處的fruit指的是fruits陣列中每一個水果的名稱，如''Apple'、'Papaya'，希望輸入水果名稱後可以直接顯示數量
    countFruits: function (fruit) {
        let count = 0;
        // 因為此物件中已經有陣列屬性fruits，所以名稱需要改成 this.fruits
        for (let index = 0; index < this.fruits.length; index++) {
            // 因為此物件中已經有陣列屬性fruits，所以名稱需要改成 this.fruits
            if (this.fruits[index] === fruit) {
                count++;
            }
        }
        return count;
    }
}
console.log(fruitSeller.countFruits('Papaya'));
console.log(fruitSeller.getInfo());

作業
let book = {
    title: 'book',
    author: 'someone',
    year: 1999,
    isBorrowed: true,
    toggleBorrowedStatus: function () {
        this.isBorrowed = !this.isBorrowed;
    },
    displayInfo: function () {
        console.log('title' + this.title);
        console.log('author' + this.author);
        console.log('year' + this.year);
    }
}

小試2
let a = '29';
let b = '28';
let result = parseInt(a) + parseInt(b) >= 50 ? '嗨，您的價格超過限制' : '嗨，您的價格沒有超過限制'

console.log(result);


小試3
let products = [
    { name: "蘋果", price: 100 },
    { name: "水梨", price: null },
    { name: "香蕉", price: 200 },
    { name: "橘子", price: 300 },
    { name: "葡萄", price: 400 },
];

// 要跑過每一個陣列內的項目，因此使用for of
for (let fruit of products) {
    // 如果價格是null就跳過該輪
    if (fruit.price === null) {
        continue;
        // 如果價格>=300就列出資料，並且停止for迴圈
    } if (fruit.price >= 300) {
        for (let key in fruit) {
            // 前面的${key}:代表把name: price:顯示出來，如果沒有打就只會顯示橘子 300
            // 後面的${fruit[key]}則是代表了陣列內的資料，如蘋果、100、null
            console.log(`${key}:${fruit[key]}`)
        }
        break;
    }
}

// Rest & Spread Operation
function printNumbers(...numbers) {
    console.log(numbers);
}
printNumbers(1, 2, 3, 4);

function printNumbers2(number1, number2, number3) {
    console.log(number1);
    console.log(number2);
    console.log(number3);
}
printNumbers2(...[1, 2, 3]);


小試4
// 1.使用rest operator讓函式資料成為陣列
function findMax(...numbers) {
    // 2.因為要找出最大值，把比較值設定為0
    let result = 0;
    // 3.在這個for迴圈中會逐一列出矩陣的資料
    for (number of numbers) {
        // 3.比較陣列內的資料，如果比result大，就讓該資料成為新的result
        if (number > result) {
            result = number;
        }
        // 第一輪比較:1>0，1成為新的result
        // 第二輪比較:2>1，2成為新的result
        // 第三輪比較:5>2，5成為新的result
        // 第四輪比較:4<5，5依舊是result
    }
    // 最後比較完成後把最終的result值5回傳
    return result;
}

console.log(findMax(1, 2, 5, 4));
console.log(findMax(1, 10, 7));
console.log(findMax(1, 5, 9, 0));

小試5
// 1.原本的函式
function getRealprice(price, discount = 0.2) {
    return price * (1 - discount);
}

//2.函式表達式，將函式名稱getRealprice前移
const getRealprice = function (price, discount = 0.2) {
    return price * (1 - discount);
}

//3.箭頭函式，把function拿掉，並把{rerurn}簡化成=>
const getRealprice = (price, discount = 0.2) => price * (1 - discount);

console.log(getRealprice(100));
console.log(getRealprice(100, 0.3))

小試6
let string = "Visit my blogs http://blog1.com and https://blog2.com for more info.";
string = string.replaceAll('http://', '');
string = string.replaceAll('https://', '');

array = string.split(' ');

for (item of array) {
    if (item.endsWith('.com')) {
        console.log(item.repeat(3));
    }
}

小試身手作業
let person={
    name:['野原新之助'],
    age:5,
    hobbies:['drawings','coding','reading','swimming','skating','running'],
    getInfo: function () {
          console.log(`我是${person.name}，今年${person.age}歲`);
      }
  }
  
  
  // 使用for of
  // for(let hobby of person.hobbies){
  //   if( hobby === "coding"){
  //     continue;
  //   } if(hobby === person.hobbies[4]){
  //     break;
  //   }
  //   console.log(hobby);
  // };
  
  // 遇到hobby是coding的時候停止
  // for(let hobby of person.hobbies){
  //   if( hobby === "coding"){
  //     continue;
  //   }
  //   console.log(hobby);
  // };
  
  // 使用for in
  // for(let key in person){
  //    console.log(`${key}:${person[key]}`); }
  
  // 如果大於18回傳true
  // let isAdult=`${person.age}`>=18? true:false;
  // console.log(isAdult);
  
  // 使用getInfo作介紹
  // console.log(person.getInfo())
  
  