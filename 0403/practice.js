let data = '{"name": "John Doe", "age": 30, "city": "New York"}';

let jsonObj = JSON.parse(data);
jsonObj.job = 'Engineer';
console.log(JSON.stringify(jsonObj));