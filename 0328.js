let chinese = 90;
let english = 80;
let math = 75;
console.log(chinese + english + math);
console.log((chinese + english + math) / 3);

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

123