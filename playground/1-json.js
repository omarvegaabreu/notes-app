const fs = require('fs');
/***
 * Learning about Jason Objects
 */

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// // To create JSON file
// fs.writeFileSync('1-json.json',bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);
const personDataBuffer =fs.readFileSync('1-json.json');

const personData = personDataBuffer.toString();

const personDataJSON = JSON.parse(personData);

console.log(personDataJSON.name,personDataJSON.planet,personDataJSON.age);
// console.log(personDataJSON.planet);
// console.log(personDataJSON.age);



