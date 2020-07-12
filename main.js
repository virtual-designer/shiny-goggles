
var proPass2;
var cpBtn = document.querySelector(".fa-clone");
document.getElementById("password").value = '';
document.getElementById("password").onclick = function(){
	document.getElementById("password").contextmenu();
};
document.getElementById("btn").onclick = function(){
	
	var chars = "01456ABG789HIJfghijKLMNOPQ23RSTUVWXYZabcdeklmCDEFnopqrstuvwxuz!,=\"'\\[/{?)><.;:}(]*-_#$@~%+^& ";
	var genPass = "";
	
	for(var i = 0; i < chars.length; i++){
		var rand2 = Math.random();
		
		if(Math.ceil(rand2) == Math.round(rand2)){
			genPass += "";
		}
		else {
			genPass += chars[i];
		}
	}
	var rand = Math.random();
		
	var proPass = genPass.substr(0, Math.ceil(chars.length / 5));
	
	if(Math.round(rand) == Math.floor(rand)){
		proPass = genPass.substr(Math.ceil(chars.length / 5), chars.length);
	}
	
	
	document.getElementById("password").value = proPass.substr(Math.ceil(proPass.length / 2), proPass.length);
	proPass2 = proPass;
};

cpBtn.onclick = function(){
	var el = document.getElementById("password");
	if(el.value != ""){
		el.select();
		el.setSelectionRange(0, 1000);
		document.execCommand("copy");
		
		document.getElementById("notify").style.opacity = "1";
		var cpp = document.getElementById("notify");
		cpp.innerHTML = "Password Copied: " + proPass2.substr(Math.ceil(proPass2.length / 2), proPass2.length);
		var c = setTimeout(function(){
			document.getElementById("notify").style.opacity = "0";
		}, 3000);
	}
};
