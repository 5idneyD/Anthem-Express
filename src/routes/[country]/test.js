import Database from "better-sqlite3";

const db = new Database("src/mydb.db");
const anthem = db.prepare("SELECT * FROM anthems WHERE country='England'").get();

console.log(anthem);
