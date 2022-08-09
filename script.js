const screen = document.getElementById("screen");
let expression = "";

function display(id) {
  if (id === "equals") {
    try {
      const result = eval(expression);
      screen.value = result;
      expression = "";
    } catch (error) {
      alert(`ERROR, ${error}`);
    }
  } else {
    expression += document.getElementById(id).value;
    screen.value = expression;
  }
}
