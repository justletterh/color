var dat=require('./whites.json');
var {inspect}=require("util");
function inverthex(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

var t=0;

for (const [name, value] of Object.entries(dat)) {
    document.body.innerHTML+=`<div class="c" style="background-color: ${value};top: ${t}px;"><span class="ctxt" style="color: ${inverthex(value)};">${name}<br />${value.toUpperCase()}</span></div>`;
    t+=75;
};

console.log("Colors Loaded!");