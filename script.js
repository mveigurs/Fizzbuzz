const min = document.getElementById("minimum");
const max = document.getElementById("maximum");
const create = document.getElementById("element");
min.value = 1;
max.value = 100;

function generate() {
  while (create.firstChild) {
    create.removeChild(create.firstChild);
  };

  for (let i = 1; i < 101; i++) {
    let newElement = document.createElement("div");
    let newContent = document.createElement("p");
    newElement.appendChild(newContent);
    create.appendChild(newElement).setAttribute("id", "element" + i);

    if (i < min.value || i > max.value) {
      newElement.style = "display: none";
    } else {
      if (i % 3 === 0 && i % 5 === 0) {
        newContent.appendChild(document.createTextNode(i + ' FizzBuzz'));
        create.appendChild(newElement).setAttribute("class", "fizzbuzz");
      }
      else if (i % 3 === 0) {
        newContent.appendChild(document.createTextNode(i + ' Fizz'));
        create.appendChild(newElement).setAttribute("class", "fizz");
      }
      else if (i % 5 === 0) {
        newContent.appendChild(document.createTextNode(i + ' Buzz'));
        create.appendChild(newElement).setAttribute("class", "buzz");
      }
      else {
        newContent.appendChild(document.createTextNode(i));
        create.appendChild(newElement).setAttribute("class", "default");
      }
    }
  }
  if (min.value > 100 || min.value < 1 || max.value > 100 || max.value < 1) {
    alert("Values must range between 1 and 100!");
    min.value = "";
    max.value = "";
  }
}

generate();

if (min.value > max.value) {
  newElement.style = "display: none";
  }

function fizz() {
  generate();
  var garbage1 = document.getElementsByClassName('buzz');
  var garbage2 = document.getElementsByClassName('fizzbuzz');
  var garbage3 = document.getElementsByClassName('default');

  for (var i = 0; i < garbage1.length; i++) {
    garbage1[i].style.display = "none";
  }
  for (var i = 0; i < garbage2.length; i++) {
    garbage2[i].style.display = "none";
  }
  for (var i = 0; i < garbage3.length; i++) {
    garbage3[i].style.display = "none";
  }
}

function buzz() {
  generate();
  var garbage1 = document.getElementsByClassName('fizz');
  var garbage2 = document.getElementsByClassName('fizzbuzz');
  var garbage3 = document.getElementsByClassName('default');

  for (var i = 0; i < garbage1.length; i++) {
    garbage1[i].style.display = "none";
  }
  for (var i = 0; i < garbage2.length; i++) {
    garbage2[i].style.display = "none";
  }
  for (var i = 0; i < garbage3.length; i++) {
    garbage3[i].style.display = "none";
  }
}

function fizzbuzz() {
  generate();
  var garbage1 = document.getElementsByClassName('fizz');
  var garbage2 = document.getElementsByClassName('buzz');
  var garbage3 = document.getElementsByClassName('default');

  for (var i = 0; i < garbage1.length; i++) {
    garbage1[i].style.display = "none";
  }
  for (var i = 0; i < garbage2.length; i++) {
    garbage2[i].style.display = "none";
  }
  for (var i = 0; i < garbage3.length; i++) {
    garbage3[i].style.display = "none";
  }
}

clearbutton.onclick = function() {
  min.value = "";
  max.value = "";
  alert("Choose new values!");
  generate();
}

function reset() {
  min.value = 1;
  max.value = 100;
  generate();
}