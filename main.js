<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Random Password Generator</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
	<div id="notify">

	</div>
  <div class="wrapper">
  	<h3>Random Password Generator</h3>
  	
  	<input type="text" onload="this.value = '';" id="password" value="" placeholder="Generated Password" readonly="readonly">
  	<i class="fa fa-clone"></i>
  	<button id="btn">Generate Password</button>
  </div>
  <script src="main.js"></script>
</body>
</html>