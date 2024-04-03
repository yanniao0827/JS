// 記錄一個來自外部的JSON字串
let data = '{"name": "John Doe", "age": 30, "city": "New York"}';
// 把該JSON字串解析成JS
let jsonObj = JSON.parse(data);
// 轉成JS後增加一個屬性
jsonObj.job = 'Engineer';
// 最後轉換回JSON
console.log(JSON.stringify(jsonObj));