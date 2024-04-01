上週回家作業
let person = {
    name: '野原新之助',
    age: 30,
    hobbies: ['drawing', 'coding', 'reading', 'swimming', 'skating', 'running'],
    getInfo: function () {
        return `你好, 我是${this.name}, 今年${this.age}歲`
    },
    isAdult: function () {
        return this.age > 18 ? true : false;
    },
    printPerson: function () {
        // 因為要列出整筆資料的時候不希望列出整個function，所以for in在跑資料的時候遇到function就跳過
        for (let key in person) {
            if (typeof person[key] === 'function') {
                continue;
            }

            if (key === 'hobbies') {
                let count = 1;
                for (let hobby of person['hobbies']) {
                    if (hobby === 'coding') {
                        continue;
                    }

                    console.log(`hobby: ${hobby}`);
                    count++;
                    if (count === 5) {
                        break;
                    }
                }
            } else {
                console.log(`${key}: ${person[key]}`);
            }
        }
    }
}

// console.log(person.getInfo());
// console.log(person.isAdult());
person.printPerson();

小試1
let inviteList = ['John', 'Dave', 'Macy'];
let newInviteList = ['Judy', 'Tom'];

console.log(inviteList.includes('Dave'));
// indexOf用來查詢特定資料在陣列的第幾個位置
console.log(inviteList.indexOf('Dave'));

inviteList = inviteList.concat(newInviteList);
inviteList = inviteList.reverse();
inviteList = inviteList.join(',');
//如果不想輸入太多行，可以直接用.來連接
// inviteList = inviteList.reverse().join(',');
console.log(inviteList);

小試2
let numbers = [-5, 2, -8, 12, 15];

let max = Math.max(...numbers);
let min = Math.min(...numbers);

// 1.建立一個空白新陣列
let absNumbers = [];
// 2.對numbers陣列使用取絕對值，取完後push到剛建立的空白陣列absNumber中
for (let number of numbers) {
    absNumbers.push(Math.abs(number));
}
// 3.從新陣列absNumbers中取最大值
let maxAbs = Math.max(...absNumbers);

let powerNumber = Math.sqrt(Math.pow(2, 6));
let ceil = Math.ceil(-5.7);
let floor = Math.floor(15.2);
let round = Math.round(12.4)

console.log(max + min + maxAbs + powerNumber + ceil + floor + round);

小試3
// 民國年
function getTaiwanDate() {
    // 1.取得今天日期
    const dateObject = new Date();
    // 2.取今天日期中的年，減去1911得到民國年
    const twYear = dateObject.getFullYear() - 1911;
    // 3.取得今天日期中的月份，但因為會從0開始計算所以手動+1，因為後面要讓系統去判斷日期是否為個位數，所以先將取得的月日變成let
    let twMonth = dateObject.getMonth() + 1;
    let twDate = dateObject.getDate();
    // 4.想要讓顯示的結果在個位數時顯示成04-01，讓系統偵測如果小於10就要在前面加0
    twMonth = twMonth > 9 ? twMonth : '0' + twMonth;
    twDate = twDate > 9 ? twDate : '0' + twDate;

    return `${twYear}-${twMonth}-${twDate}`
}

console.log(getTaiwanDate());

// 自行輸入日期，自動生成民國年月日
function getTaiwanDate2(year = 0, month = 0, date = 0) {
    const dateObject = new Date();
    if (year !== 0 && month !== 0 && date !== 0) {
        dateObject.setFullYear(year);
        dateObject.setMonth(month - 1);
        dateObject.setDate(date);
    }

    const twYear = dateObject.getFullYear() - 1911;
    let twMonth = dateObject.getMonth() + 1;
    let twDate = dateObject.getDate();
    twMonth = twMonth > 9 ? twMonth : '0' + twMonth;
    twDate = twDate > 9 ? twDate : '0' + twDate;

    return `${twYear}-${twMonth}-${twDate}`
}

console.log(getTaiwanDate2(2020, 3, 20));

// 取隨機數
function getLuckyNumber() {
    // 因為要讓取得的隨機數顯示成整數，因此前面加上Math.floor無條件捨去
    return Math.floor(Math.random() * 26 + 20);
}


console.log(getLuckyNumber());

function getLuckyNumber2(min = 20, max = 46) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getLuckyNumber2(1.44, 3.89));

小試4(在index中)