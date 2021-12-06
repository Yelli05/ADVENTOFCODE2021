import controlsData from './controlsData.json';

const FORWARD_COMMAND = "forward";
const DOWN_COMMAND = "down";
const UP_COMMAND = "up";

let x = 0;
let y = 0;
let aim = 0;

controlsData.forEach((order => {
    if (order.cmd === FORWARD_COMMAND) {
        x += order.value;
        y += order.value * aim;
    }
    if (order.cmd === DOWN_COMMAND) {
        aim += order.value;
    }
    if (order.cmd === UP_COMMAND) {
        aim -= order.value;
    }
}))

console.log(x * y);