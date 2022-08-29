<script>
	/** @type {import('./$types').PageData} */
	export let data;
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
	<title>National Anthems</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital@1&family=Roboto+Mono:wght@400&display=swap"
		rel="stylesheet"
	/>
	<script src="https://cdn.tailwindcss.com"></script>
	<style>
		body {
			color: rgb(29, 12, 53);
			text-decoration-color: rgb(29, 12, 53);
			font-family: 'Roboto Mono', monospace;
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
	</style>
</head>
<body class="text-center bg-vanilla">
	<div id="header" class="bg-orange-900 py-16 text-xl md:text-3xl lg:text-5xl underline">
        <div class="grid grid-cols-9">
            <label class="switch col-start-7 lg:col-start-8">
                <input id="checkBox" type="checkbox" unchecked onchange="changeCSS()"/>
                <span class="slider round" />
            </label>
        </div>
		<h1>The National Anthem of {country}</h1>
	</div>
	<div class="py-28 text-lg md:text:xl lg:text-2xl">
		<!-- <h3  class="underline">{name}</h3> -->
		<p style="white-space: pre-wrap;">{words}</p>
	</div>
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
				body.style.backgroundColor = '#F3E5AB';
				body.style.color = 'rgb(29, 12, 53)';
				header.style.color = '#ffd5af';
				header.style.textDecorationColor = '#ffd5af';
				header.style.backgroundColor = '#712E1E';
				button.style.backgroundColor = '#712E1E';
				button.style.color = '#ffd5af';
			}
		}
	</script>
</body>
