const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8", (input, err) => {
  if (err) {
    console.log(err);
  }
});

// Data massage
const commands = input.split("\n");
let commandsArray = commands.map((command) => {
  let arr = [];
  let [c, number] = command.split(" ");
  arr.push(c, parseInt(number));
  return arr;
});

// World position
let horizontalPos = 0;
let depth = 0;

// Do stuff
const moveAroundSubmarine = (commands) => {
  commands.map((command) => {
    switch (command[0]) {
      case "forward":
        horizontalPos = horizontalPos + command[1];
        break;
      case "up":
        depth = depth - command[1];
        break;
      case "down":
        depth = depth + command[1];
        break;

      default:
        break;
    }
  });
};
moveAroundSubmarine(commandsArray);
console.log(`${depth * horizontalPos} is the magic number`);
