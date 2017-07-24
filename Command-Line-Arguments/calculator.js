const operator = process.argv[2]
const operandFirst = process.argv[3]
const operandSecond = process.argv[4]
switch(operator) {
  case "add":
    console.log(parseInt(operandFirst) + parseInt(operandSecond))
    break;

  case "subtract":
    console.log(operandFirst - operandSecond)
    break;

  case "multiply":
    console.log(operandFirst * operandSecond)
    break;

  case "divide":
    console.log(operandFirst / operandSecond)
    break;
}
