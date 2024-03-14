const divide = document.getElementById("divide");
const backspace = document.getElementById("backspace");
const multiply = document.getElementById("multi");
const input = document.getElementById("output-input");
const operator = document.querySelectorAll(".insert");
const output = document.getElementById("output");
const cut = document.getElementById("cut");
const equals = document.getElementById("equals");
const percent = document.getElementById("percentage");
const dot = document.getElementById("dot");
let insertArr = Array.from(operator);
let result;
let inputArr = [];
let resultArr;
// state variable
let cutState = false;
let resultState = false;
let haveDot = false;
let number;
// function section

insertArr.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (inputArr.length < 16) {
    

      if (
        (e.target.innerHTML !== "x" &&
          e.target.innerHTML !== "÷" &&
          e.target.innerHTML !== "+" &&
          e.target.innerHTML !== "-") &&
        resultState == true
      ) {
        console.log("fuck")
        inputArr.length = 0;
        result = 0;
        haveDot = false;
        input.value = item.innerHTML;

        output.innerHTML = result;
        resultState = false;
        inputArr.push(item.innerHTML);}
       else if((e.target.innerHTML === "x" ||
      e.target.innerHTML === "÷" ||
      e.target.innerHTML === "+" ||
      e.target.innerHTML === "-") &&
    resultState == true){
        if (
          e.target.innerHTML === "x" ||
          e.target.innerHTML === "÷" ||
          e.target.innerHTML === "+" ||
          (e.target.innerHTML === "-" && haveDot == true)
        ) {
          haveDot = false;
        }
        input.value += item.innerHTML;
        inputArr.push(item.innerHTML);
      resultState = false
        for (let i = 0; i < inputArr.length; i++) {
          if (inputArr[i] === "÷") {
            inputArr[i] = "/";
          }
          if (inputArr[i] === "x") {
            inputArr[i] = "*";
          }
        }}
      else{
      if (
        e.target.innerHTML === "x" ||
        e.target.innerHTML === "÷" ||
        e.target.innerHTML === "+" ||
        (e.target.innerHTML === "-" && haveDot == true)
      ) {
        haveDot = false;
      }
      input.value += item.innerHTML;
      inputArr.push(item.innerHTML);
      console.log(inputArr);
      for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === "÷") {
          inputArr[i] = "/";
        }
        if (inputArr[i] === "x") {
          inputArr[i] = "*";
        }
      }
      }
    result = eval(inputArr.join(""));

    output.innerHTML = result;
  } 

      if (inputArr.length != 0) {
        cut.innerHTML = "C";
      }
    });
});

dot.addEventListener("click", function () {
  if (haveDot === false) {
    inputArr.push(dot.innerHTML);
    input.value = inputArr.join("");
    haveDot = true;
  } else {
    return;
  }
});

cut.addEventListener("click", function () {
  inputArr.length = 0;
  input.value = inputArr;
  output.innerHTML = input.value;
  haveDot = false;
  cut.innerHTML = "AC";
  resultState = false;
});

equals.addEventListener("click", function () {
  result = eval(inputArr.join(""));
  inputArr = [];
  inputArr.push(result);
  input.value = result;
  output.innerHTML = "=" + " " + result;
  resultState = true;
});

percent.addEventListener("click", function () {
  if (
    inputArr.includes("/") ||
    inputArr.includes("+") ||
    inputArr.includes("-") ||
    inputArr.includes("*")
  ) {
    input.value = "Abe saale ";
    output.innerHTML = "syntax error";
    console.log("mistake here");
  } else {
    number = parseFloat(inputArr.join(""));
    inputArr = [];
    inputArr.push(number / 100);
    input.value = inputArr.join("");
    output.innerHTML = input.value;
    if (isNaN(inputArr) === true) {
      input.value = "Abe saale ";
      output.innerHTML = "syntax error";
      inputArr = [];
    }
  }
  console.log(inputArr);
});

backspace.addEventListener("click", function () {
  if (resultState == true) {
    resultArr = result.toString().split("");

    resultArr.pop();

    input.value = resultArr.join("");
    output.innerHTML = resultArr.join("");
    result = resultArr.join("");

    if (result == 0) {
      resultState = false;
    }
  } else {
    inputArr.pop();

    input.value = inputArr.join("");
    result = eval(inputArr.join(""));

    output.innerHTML = result;
    console.log(result);
    console.log(inputArr);
  }
  if (inputArr.length == 0) {
    cut.innerHTML = "AC";
    output.innerHTML = "";
  }
});
