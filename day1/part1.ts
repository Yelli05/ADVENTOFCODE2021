import depthData from './depthData.json';

let increasedCount = 0;
let prevDepth = depthData[0];

depthData.slice(1).forEach((depth) => {
    if (depth > prevDepth) {
        increasedCount++;
    }
    prevDepth = depth;
});

console.log(increasedCount);
