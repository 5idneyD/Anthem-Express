<script>
	import { loop_guard, query_selector_all } from 'svelte/internal';

	/** @type {import('./$types').PageData} */
	export let data;
	let countries = data.countries;
	let country = data.country;
	// let name = data.name;
	// let words = data.lyrics.replaceAll(",", ","+"<br>");
	let words = data.lyrics;
	// console.log(words);
</script>

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="National Anthem of {country}" />
	<meta name="keywords" content="National, Anthem, National Anthem, {country}" />
	<title>National Anthem of {country}</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital@1&family=Roboto+Mono:wght@400&display=swap"
		rel="stylesheet"
	/>
	<script src="https://cdn.tailwindcss.com"></script>
	<style>
		body {
			background-color: #ddc3a5;
			color: #201e20;
			text-decoration-color: #201e20;
			font-family: 'Roboto Mono', monospace;
		}
		#header {
			background-color: #201e20;
			color: #e0a96d;
			text-decoration-color: #e0a96d;
		}
		#header {
			color: #ffd5af;
			text-decoration-color: #ffd5af;
		}
		h1,
		h2 {
			margin-top: 3%;
		}
		countries:hover {
			background-color: #c1634c;
		}
		#button {
			margin-top: 10px;
			margin-bottom: 5%;
		}
		#actualButton {
			background-color: #201e20;
			color: #e0a96d;
		}
		.switch {
			position: relative;
			display: inline-block;
			width: 60px;
			height: 34px;
		}

		.switch input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #ccc;
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}

		.slider:before {
			position: absolute;
			content: '';
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}

		input:checked + .slider {
			background-color: #2196f3;
		}

		input:focus + .slider {
			box-shadow: 0 0 1px #2196f3;
		}

		input:checked + .slider:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}

		/* Rounded sliders */
		.slider.round {
			border-radius: 34px;
		}

		.slider.round:before {
			border-radius: 50%;
		}

		@media only screen and (max-width: 600px) {
			#logo {
				float: left;
				margin-top: -25%;
				margin-left: 6%;
			}
		}

		@media only screen and (min-width: 601px) {
			#logo {
				float: left;
				margin-top: -6%;
				margin-left: 15%;
			}
		}
	</style>
</head>
<body class="text-center">
	<div id="header" class="bg-orange-900 py-16 text-xl md:text-3xl lg:text-5xl underline">
		<div class="grid grid-cols-9">
			<label class="switch col-start-7 lg:col-start-8">
				<input id="checkBox" type="checkbox" unchecked onchange="changeCSS()" />
				<span class="slider round" />
			</label>
		</div>
		<div class="grid grid-cols-3">
			<a href="/"
				><img
					id="logo"
					src="/images/mylogo.png"
					alt="logo"
					class="scale-75 md:scale-100 col-start-1"
				/></a
			>
			<h1 class="col-start-2 text-align">The National Anthem of {country}</h1>
		</div>
	</div>
	<div class="py-28 text-lg md:text:xl lg:text-2xl">
		<!-- <h3  class="underline">{name}</h3> -->
		<p style="white-space: pre-wrap;">{words}</p>
	</div>
	<div id="country" class="flex flex-col justify-center items-center">
		<select
			id="countries"
			name="country"
			onchange="changeLink()"
			class="
text-center
w-5/6
md:w-1/2
lg:w-1/3
form-control
block
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-gray-100 bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700
focus:bg-white
focus:border-blue-600 
focus:outline-none"
		>
			<option>Select a country here!</option>
			{#each countries as country}
				<option value={country}>
					{country.country}
				</option>
			{/each}
		</select>
	</div>
	<div id="button" class="flex space-x-2 justify-center">
		<button
			type="submit"
			id="actualButton"
			class="
inline-block
px-6
py-2.5
bg-orange-900
text-white
font-medium
text-xs
leading-tight
uppercase rounded
shadow-md hover:bg-orange-600
hover:shadow-lg
focus:bg-burgundy
focus:shadow-lg
focus:outline-none
focus:ring-0
active:bg-orange-600
active:shadow-lg
transition
duration-150
ease-in-out"><a id="link">Enter</a></button
		>
		<br />
		</div>
	<div>
		<h2>Sponsored by <a href="https://www.novariance.com"><u>No Variance Accounting Software</u></a></h2>
	</div>
	<script>
		function changeLink() {
			var sel = document.getElementById('countries');
			var text = sel.options[sel.selectedIndex].text;
			var b = (document.getElementById('link').href = '/' + text);
		}
	</script>
	<script>
		function changeCSS() {
			if (document.getElementById('checkBox').checked) {
				var body = document.querySelector('body');
				var header = document.querySelector('#header');
				var button = document.querySelector('button');
				body.style.backgroundColor = '#013328';
				body.style.color = '#E3DCD2';
				header.style.color = '#013328';
				header.style.textDecorationColor = '#013328';
				header.style.backgroundColor = '#CC8B65';
				button.style.backgroundColor = '#CC8B65';
				button.style.color = '#013328';
			} else {
				var body = document.querySelector('body');
				var header = document.querySelector('#header');
				var button = document.querySelector('button');
				body.style.backgroundColor = '#DDC3A5';
				body.style.color = '#201E20';
				header.style.color = '#E0A96D';
				header.style.textDecorationColor = '#E0A96D';
				header.style.backgroundColor = '#201E20';
				button.style.backgroundColor = '#201E20';
				button.style.color = '#E0A96D';
			}
		}
	</script>
</body>
