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