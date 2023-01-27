const fs = require("fs");

fs.readFile(`src/sample_input/input.txt`, "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  let accounts = {};
  let inputLines = data.toString().split("\n");
  for (let i = 0; i < inputLines.length; i++) {
    input = inputLines[i].trim().split(" ");
    if (input[0] === "CREATE") {
      if (accounts[input[1]] === undefined) {
        accounts[input[1]] = { name: input[2], balance: 0 };
      }
    }
    if (input[0] === "DEPOSIT") {
      accounts[input[1]].balance =
        accounts[input[1]].balance + Number(input[2]);
    }
    if (input[0] === "WITHDRAW") {
      accounts[input[1]].balance =
        accounts[input[1]].balance - Number(input[2]);
    }
    if (input[0] === "BALANCE") {
      let name = accounts[input[1]].name;
      let balance = accounts[input[1]].balance;
      console.log(`${name} ${balance}`);
    }
  }
});
