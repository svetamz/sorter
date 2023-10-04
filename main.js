const { sortData } = require('./sorter.js');
const readline = require('readline-sync');

const dataInput = readline.question('\n Введіть дані(data) та умову(condition) у форматі JSON \n');

try {
  const input = JSON.parse(dataInput);

  const result = sortData(input);
  console.log(result);
} catch (error) {
  console.error('\n Помилка введення. Перевірте правильність формату JSON.');
}