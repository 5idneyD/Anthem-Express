

<script>
    /** @type {import('./$types').PageData} */
    export let data;
      </script>

<h1>Welcome</h1>
<h3>{data.name}</h3>
<p>{data.lyrics.replace(",", ",\n")}</p>

