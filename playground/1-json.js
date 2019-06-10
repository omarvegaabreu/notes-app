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

console.log('His name is ' + personDataJSON.name + '.' + ' He lives in planet: ' + 
personDataJSON.planet + '.' + ' His age is: ' + personDataJSON.age + ' Years old. ' );
// console.log(personDataJSON.planet);
// console.log(personDataJSON.age);



