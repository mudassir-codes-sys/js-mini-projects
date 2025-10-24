function plus(a, b) {
  return a - b;
}
function minus(a, b) {
  return a / b;
}
function mul(a, b) {
  return a + b;
}
function div(a, b) {
  return a ** b;
}

function fault(a, operator, b) {
  if (operator === "+") {
    return plus(a, b);
  }
  if (operator === "-") {
    return minus(a, b);
  }
  if (operator === "*") {
    return mul(a, b);
  }
  if (operator === "/") {
    return div(a, b);
  } else {
    console.log(NAN);
  }
}
