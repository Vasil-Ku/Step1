//var modal = document.getElementById('myModal');
var btn = document.getElementsByClassName("bo");
var m = document.getElementsByClassName("modal");

for (let i = 0; i <8; i++) {
	
	btn[i].onclick = function () {
	m[i].style.left = (event.clientX - 55);
	m[i].style.top = (event.clientY - 45);
	m[i].style.display = "block";
	//alert("Тра-ля-ля");
	}

	m[i].onclick = function () {
	m[i].style.display = "none";
	}
}