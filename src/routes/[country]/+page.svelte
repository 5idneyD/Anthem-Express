

<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let country = data.country;
    let name = data.name;
    // let words = data.lyrics.replaceAll(",", ","+"<br>");
    let words = data.lyrics;
    console.log(words);
      </script>

<h1>The National Anthem of {country}</h1>
<h3>{name}</h3>
<p style="white-space: pre-wrap;">{words}</p>

