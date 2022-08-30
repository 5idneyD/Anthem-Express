const sqlite3 = require('better-sqlite3');

const db = new sqlite3('src/mydb.db');

// var drop = db.prepare("DROP TABLE anthems");
// var rows = db.prepare("SELECT * FROM anthems").all();
// console.log(rows);
// console.log(3)
// db.run("DROP TABLE anthems;")

let anthem = `
God save our gracious Queen,
Long live our noble Queen,
God save the Queen!
Send her victorious,
Happy and glorious,
Long to reign over us,
God save the Queen!

O Lord our God arise,
Scatter our enemies,
And make them fall!
Confound their politics,
Frustrate their knavish tricks,
On Thee our hopes we fix,
God save us all!

Not in this land alone,
But be God’s mercies known,
From shore to shore!
Lord make the nations see,
That men should brothers be,
And form one family,
The wide world o’er.

From every latent foe,
From the assassins blow,
God save the Queen!
O’er her thine arm extend,
For Britain’s sake defend,
Our mother, prince, and friend,
God save the Queen!

Thy choicest gifts in store,
On her be pleased to pour,
Long may she reign!
May she defend our laws,
And ever give us cause,
To sing with heart and voice,
God save the Queen!
`;

let country = 'England';
let name = 'God Save The Queen';
console.log(2);
const create = db.exec('CREATE TABLE IF NOT EXISTS anthems (country TEXT, name TEXT, words TEXT)');

const insert = db.prepare(
	'INSERT INTO anthems (country, name, words) VALUES (@country, @name, @words)'
);
const insertMany = db.transaction((songs) => {
	for (const song of songs) insert.run(song);
});

insertMany([{ country: 'England', name: 'God Save the Queen', words: anthem }]);

console.log(5);

// const drop = db.exec("DELETE FROM anthems");
const rows = db.prepare('SELECT * FROM anthems').all();
console.log(rows);

db.close();

console.log(7);
