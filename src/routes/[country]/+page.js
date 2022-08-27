import { error } from '@sveltejs/kit';
import Database from "better-sqlite3";

/** @type {import('./$types').PageLoad} */
export function load( {params}) {

if (params.country="England"){
  const db = new Database("src/mydb.db");

  const rows = db.prepare("SELECT * FROM anthems").all();

  console.log(rows);

  return {
    
  }
}
  throw error(404, 'Not found');
}

