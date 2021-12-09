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

let sumOfSlidingWindow = [];
measurements.map((measurement, i) => {
  if (measurements[i + 1] && measurements[i + 2]) {
    sumOfSlidingWindow.push(
      measurement + measurements[i + 1] + measurements[i + 2]
    );
  }
});

let nrOfLargerMeasurementsSlidingWindow = 0;

sumOfSlidingWindow.map((measurement, i) => {
  if (measurement > sumOfSlidingWindow[i - 1]) {
    nrOfLargerMeasurementsSlidingWindow++;
  }
});

console.log(
  "Number of measurements within sliding window larger than previous one is " +
    nrOfLargerMeasurementsSlidingWindow
);
