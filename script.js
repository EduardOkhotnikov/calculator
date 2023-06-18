
function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  var result = document.getElementById("result").value;
  try {
    var finalResult = eval(result);
    document.getElementById("result").value = finalResult;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}