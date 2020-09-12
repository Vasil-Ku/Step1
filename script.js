//var modal = document.getElementById('myModal');
var btn = document.getElementsByClassName("bo");
var m = document.getElementsByClassName("modal");

// Alert-алгоритм (без цикла)
btn[0].onclick = function () {
	alert('Feedback serves to determine the requests and wishes of customers');
}

btn[1].onclick = function () {
	alert('Study of customer activity');
}

btn[2].onclick = function () {
	alert('Defining objects and goals for product improvement');
}

btn[3].onclick = function () {
	alert('Concept development');
}

btn[4].onclick = function () {
	alert('Creation of a working prototype');
}

btn[5].onclick = function () {
	alert('Testing the model');
}

btn[6].onclick = function () {
	alert('Design decoration');
}

btn[7].onclick = function () {
	alert('Implementation of the finished product');
}

//Плохой алгоритм, т.к. зацикленный и не только. Зато работает.
/*for (let i = 0; i <8; i++) {
	
	btn[i].onclick = function () {
	m[i].style.left = (event.clientX - 55);
	m[i].style.top = (event.clientY - 45);
	m[i].style.display = "block";
	//alert("Тра-ля-ля");
	}

	m[i].onclick = function () {
	m[i].style.display = "none";
	}
}*/

//Нормальный алгоритм(не работает - разобраться в синтаксисе)
/*const windowOpen = () {
	let ans = false;
	for (let i = 0; i < 8; i++) {
		if (m[i].style.display == "block") {
			ans = true;
		}
	}
	return ans;
}

const closeWindow = () {
	for (let i = 0; i < 8; i++) {
		m[i].style.display = "none";
	}
}

window.onclick = function (event) {
	if (windowOpen) {
		closeWindow;
	}
	else {
		for (let i = 0; i < 8; i++) { //Хорошо бы и тут без цикла. Как определить № элемента массива?
			if (event.currentTarget == btn[i]) {
				m[i].style.left = (event.clientX - 55);
				m[i].style.top = (event.clientY - 45);
				m[i].style.display = "block";
			}
		}
	}
}*/