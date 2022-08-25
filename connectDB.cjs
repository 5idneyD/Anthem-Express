const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('mydb.db');
db.run("DROP TABLE anthems;")

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
`

db.serialize(() => {

    db.run("CREATE TABLE anthems (country TEXT, name TEXT, words TEXT)");

    db.run("INSERT INTO anthems VALUES ('England', 'God Save Our Queen',(?))", (anthem));

    db.each("SELECT * FROM anthems", (err, row) => {
        console.log(row.country + ": " + row.words);
    });
});

db.close();