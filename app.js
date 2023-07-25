"use strict";
const num1e = document.getElementById("num1");
const num2e = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResluts = [];
function addt(num1, num2) {
    return num1 + num2;
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.time);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", () => {
    const num1 = num1e.value;
    const num2 = num2e.value;
    const result = addt(+num1, +num2);
    numResluts.push(result);
    printResult({ val: result, time: new Date() });
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("it worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
