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

// Do stuff
const moveAroundSubmarine = (commands, part2 = false) => {
  // World position
  let horizontalPos = 0;
  let depth = 0;
  let aim = 0;
  if (!part2) {
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
  } else {
    commands.map((command) => {
      switch (command[0]) {
        case "forward":
          horizontalPos = horizontalPos + command[1];
          depth += aim * command[1];
          break;
        case "up":
          aim = aim - command[1];
          break;
        case "down":
          aim = aim + command[1];
          break;
        default:
          break;
      }
    });
  }
  console.log("depth: " + depth);
  console.log("horizontalPos: " + horizontalPos);
  console.log("aim: " + aim);

  return depth * horizontalPos;
};
let magicNumber = moveAroundSubmarine(commandsArray);
let magicNumber2 = moveAroundSubmarine(commandsArray, (part2 = true));
console.log(`${magicNumber} is the magic number`);
console.log(`${magicNumber2} is the magic number`);
