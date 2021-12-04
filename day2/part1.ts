import controlsData from './controlsData.json';

const FORWARD_COMMAND = "forward";
const DOWN_COMMAND = "down";
const UP_COMMAND = "up";

let x = 0;
let y = 0;

controlsData.forEach((order => {
    if (order.cmd === FORWARD_COMMAND) {
        x += order.value;
    }
    if (order.cmd === DOWN_COMMAND) {
        y += order.value;
    }
    if (order.cmd === UP_COMMAND) {
        y -= order.value;
    }
}))

console.log(x);
console.log(y);
console.log(x * y);