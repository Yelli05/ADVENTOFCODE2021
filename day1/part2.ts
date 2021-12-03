import depthData from './depthData.json';

const countDepth = (values: number[]) =>
    values.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );

let previousDepth = countDepth(depthData.slice(0, 3));

let increaseCount = 0;

for (let i = 1; i < depthData.length; i++) {
    let currentDepth = countDepth(depthData.slice(i, i + 3));
    if (currentDepth > previousDepth) {
        increaseCount++;
    }
    previousDepth = currentDepth;
}

console.log(increaseCount);
