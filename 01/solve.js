const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8", (input, err) => {
  if (err) {
    console.log(err);
  }
});
const measurements = input.split("\n").map(Number);

const measurementComparator = (arr, slidingWindow = false) => {
  console.log(slidingWindow);
  let largerMeasurements = 0;
  let newArr = [];
  arr.map((el, i) => {
    if (!slidingWindow) {
      newArr.push(el);
    } else {
      if (arr[i + 1] && arr[i + 2]) {
        newArr.push(el + arr[i + 1] + arr[i + 2]);
      }
    }
  });
  newArr.map((el, i) => {
    if (el > newArr[i - 1]) {
      largerMeasurements++;
    }
  });
  return largerMeasurements;
};

const nrOfLargerMeasurements = measurementComparator(measurements);
const sumOfSlidingWindow = measurementComparator(
  measurements,
  (slidingWindow = true)
);
console.log(
  `Number of measurements larger than previous one is  ${nrOfLargerMeasurements}`
);
console.log(
  `Number of measurements within sliding window larger than previous one is ${sumOfSlidingWindow}`
);
