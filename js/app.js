const parseintNumber = () => {
  const inp1 = parseInt(document.getElementById("inp1").value);
  const inp2 = parseInt(document.getElementById("inp2").value);

  if (isNaN(inp1) || isNaN(inp2)) {
    document.getElementById("display").value =
      "Please enter both inputfield numbers.";
    // alert("Please enter both inputfield numbers.");
    return null;
  }

  return { inp1, inp2 };
};

const addNumber = () => {
  const data = parseintNumber();

  document.getElementById("display").value = data.inp1 + data.inp2;
};

const minus = () => {
  const data = parseintNumber();

  document.getElementById("display").value = data.inp1 - data.inp2;
};

const divide = () => {
  const data = parseintNumber();

  if (data.inp1 === 0) {
    document.getElementById("display").value = "Result is Undefined !";
    // alert("Result is Undefined!");
    return;
  }
  document.getElementById("display").value = data.inp1 / data.inp2;
};

const multiply = () => {
  const data = parseintNumber();

  document.getElementById("display").value = data.inp1 * data.inp2;
};

const clearButton = () => {
  document.getElementById("inp1").value = "";
  document.getElementById("inp2").value = "";

  document.getElementById("display").value = "";
};

const allClear = () => {
  parseintNumber();
  clearButton();
};
