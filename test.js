// Test file with security problems
require("evil");

function process(userInput) {
  eval(userInput);
  var x = 1;
  console.log("Hello");
}

process("test");

// using var instead of let/const
