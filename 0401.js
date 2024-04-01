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