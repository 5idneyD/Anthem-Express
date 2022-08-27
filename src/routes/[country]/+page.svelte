

<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let country = data.country;
    let name = data.name;
    // let words = data.lyrics.replaceAll(",", ","+"<br>");
    let words = data.lyrics;
    console.log(words);
      </script>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>National Anthems</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital@1&family=Roboto+Mono:wght@400&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body{
        background-color: #FFD5AF;
        color: rgb(29, 12, 53);
        text-decoration-color: rgb(29, 12, 53);
        font-family: 'Roboto Mono', monospace;
      }
      #header {
        color: #FFD5AF;
        text-decoration-color: #FFD5AF;
      }
      h1, h2 {
        margin-top: 3%;
      }
      countries:hover {
        background-color: #c1634c;
      }
      #button {
        margin-top: 10px;
      }
    </style>
  </head>
  <body class="text-center">
    <div id="header" class="bg-orange-900 py-16 text-xl md:text-3xl lg:text-5xl underline">
      <h1>The National Anthem of {country}</h1>
    </div>
    <div class="py-28 text-lg md:text:xl lg:text-2xl">
<h3  class="underline">{name}</h3>
<p style="white-space: pre-wrap;">{words}</p>
</div>
</body>