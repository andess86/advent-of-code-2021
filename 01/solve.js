const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8", (input, err) => {
  if (err) {
    console.log(err);
  }
});
let nrOfLargerMeasurements = 0;
const measurements = input.split("\n").map(Number);
measurements.map((measurement, i) => {
  if (measurement > measurements[i - 1]) {
    nrOfLargerMeasurements++;
  }
});
console.log(
  "Number of measurements larger than previous one is " + nrOfLargerMeasurements
);
