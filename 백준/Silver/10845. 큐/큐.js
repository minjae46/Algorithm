const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input.slice(1);

let queue = [];
let output = [];

for (let i = 0; i < N; i++) {
  const [cmd, value] = commands[i].split(" ");

  switch (cmd) {
    case "push":
      queue.push(Number(value));
      break;
    case "pop":
      output.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      output.push(queue.length);
      break;
    case "empty":
      output.push(queue.length ? 0 : 1);
      break;
    case "front":
      output.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      output.push(queue.length ? queue[queue.length - 1] : -1);
      break;
  }
}

console.log(output.join("\n"));
