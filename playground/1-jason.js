const fs = require('fs');
/***
 * Learning about Jason Objects
 */

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);

// To create JSON file
fs.writeFileSync('1-json.json',bookJSON);