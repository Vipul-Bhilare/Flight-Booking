function changeText() {
  document.querySelector("h1").innerHTML = "My Website has changed!";
}

function validateForm() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var departure = document.getElementById("departure").value;
  var returnDate = document.getElementById("return").value;

  if (from == "" || to == "" || departure == "" || returnDate == "") {
    alert("Please enter all of the required information.");
    return false;
  }

  return true;
}
function changeText() {
  document.querySelector("h1").innerHTML = "My Website has changed!";
}

function validateForm() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var departure = document.getElementById("departure").value;
  var returnDate = document.getElementById("return").value;

  if (from == "" || to == "" || departure == "" || returnDate == "") {
    alert("Please enter all of the required information.");
    return false;
  }

  return true;
}
