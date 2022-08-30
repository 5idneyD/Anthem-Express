import { error } from '@sveltejs/kit';
import Database from "better-sqlite3";

export const prerender = true
/** @type {import('./$types').PageLoad} */
export function load({ params }) {

  try {
    const db = new Database("src/mydb.db");
    const countries = db.prepare("SELECT country FROM anthems").all();

    return {
      country: countries,
    }
  }
  catch (e) {
    throw error(404, 'Not found');
  }
}
