小試1
let chinese = 90;
let english = 80;
let math = 75;
console.log(chinese + english + math);
console.log((chinese + english + math) / 3);

小試2
let score = 80;
if (score >= 90) {
    console.log('A')
} else if (score >= 80) {
    console.log('B')
} else if (score >= 70) {
    console.log('C')
} else if (score >= 60) {
    console.log('D')
} else {
    console.log('E')
}

小試3
let a = 8;
if (a <= 10) {
    console.log(a * 6)
} else if (10 <= a && a <= 20) {
    console.log((a - 10) * 2 + 60)
} else if (20 <= a && a <= 40) {
    console.log((a - 20) + 80)
} else {
    console.log(100)
}

小試4
const date = 1;
switch (date) {
    case 1:
        console.log('星期一');
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
        console.log('星期三');
        break;
    case 4:
        console.log('星期四');
        break;
    case 5:
        console.log('星期五');
        break;
    case 6:
        console.log('星期六');
        break;
    case 7:
        console.log('星期日');
        break;
    default:
        console.log('無效的數字');
        break;
}

小試5
let n = 10;
let counter = 1;
let sum = 0;

while (counter <= n) {
    sum = sum + counter;
    counter++;
}

小試6
let n2 = 10;
let sum2 = 0;

for (let counter = 1; counter <= n2; counter++) {
    sum2 = sum2 + counter;
}
console.log(sum2);

小試7
// 乘法表為1x1 1x2 1x3......，前面數字在每一輪中都固定，後面的數字則會變動，
// 因此第一個迴圈表示的是前面的數字，被包在內部的迴圈則表示後面那個數字在每一輪會變動9次，
// 1x1 1x2 1x3 1x4 1x5 1x6 1x7 1x8 1x9 在第一輪中，前面的數字固定是1，後面的數字則會以j++來表示，在這一輪中持續變動
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        if (i === j) {
            console.log(i + 'x' + j + '=' + i * j + '棒');
        } else
            console.log(i + 'x' + j + '=' + i * j);
    }
}

小試8
let list = ['Alice', 'Bob'];
list.push('Charlie');
list.unshift('David');
list.splice(1, 1);
console.log(list);
console.log(list.length);

小試9
let numbers = [3, 10, 13];

for (let index = 0; index < numbers.length; index++) {
    let n = numbers[index];
    let sum = 0;
    for (let counter = 1; counter <= n; counter++) {
        sum = sum + counter;
    }
    console.log(sum);
}

小試10
function countSum(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        let n = numbers[index];
        let sum = 0;
        for (let counter = 1; counter <= n; counter++) {
            sum = sum + counter;
        }
        console.log(sum);
    }
}

countSum([3, 10, 13]);

小試11
// 1.首先新增函式countPapaya
function countPapaya(fruits) {
    // 5.原本應該要放在if內，但希望在找到papaya的時候不要從又從0重新計算，因此把count提前放到這裡
    let count = 0;
    // 3.因為需要知道papaya可能會在陣列內的那些位置，因此要做for迴圈
    for (let index = 0; index < fruits.length; index++) {
        // 4.如果陣列內的值與papaya相等，在count內+1
        if (fruits[index] === 'Papaya') {
            count++;
        }
    }
    // 6.回傳return值
    return count;
}

// 2.建立一個陣列
let result = countPapaya(['Orange', 'Apple', 'Papaya', 'Kiwi', 'Papaya']);
// 7.列出結果
console.log(result);