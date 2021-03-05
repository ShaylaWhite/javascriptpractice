var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

function toggleLi(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}



function inputLength() {
	return input.value.length;
}



function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
} 

ul.addEventListener("click", toggleLi);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);