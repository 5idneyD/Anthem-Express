import { error } from '@sveltejs/kit';
import Database from 'better-sqlite3';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	try {
		const db = new Database('src/mydb.db');
		// console.log(params.country);
		const anthem = db.prepare("SELECT * FROM anthems WHERE country='" + params.country + "'").get();

		const countries = db.prepare('SELECT country FROM anthems').all();

		// console.log(anthem.words);

		return {
			countries: countries,
			country: anthem.country,
			// name: anthem.name,
			lyrics: anthem.words
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
