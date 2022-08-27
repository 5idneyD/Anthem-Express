import requests
from bs4 import BeautifulSoup as bs4
import win32com.client as win32

xl = win32.gencache.EnsureDispatch("excel.application")
book = xl.Workbooks.open("path to book")
sheet = book.Worksheets("Sheet1")

countries = []
for i in sheet.Range("A1:A250"):
    countries.append(i.Value)

for i in countries:
     url = f"https://www.hymne-national.com/en/national-anthem-{i}/"

     page = requests.get(url)
     soup = bs4(page.content, "html.parser")
     a = [i.text for i in soup.select("p[style='text-align:center; border-style:solid; border-width: 2px; border-radius: 10px; border-color:grey']")]
     print(i, a)
     with open(f"C:\\WebDev\\National Anthems\\Anthem-Express-master\\Anthems\\{i}.txt", "w", encoding="utf-8") as f:
         f.write("\n".join(a[:]))
