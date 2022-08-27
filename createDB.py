import sqlite3
import os

conn = sqlite3.connect("mydb.db")
cur = conn.cursor()
try:
    cur.execute("CREATE TABLE anthems (country TEXT, words TEXT)")
except:
    pass
for file in os.listdir("./Anthems/"):
    country = file.split(".")[0]
    print(country)
    with open(f"./Anthems/{file}", "r", encoding="utf-8") as f:
        text = f.read()
        print(text)
        cur.execute("INSERT INTO anthems VALUES (?, ?)", (country, text))
        conn.commit()

conn.close()