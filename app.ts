const num1e = document.getElementById("num1") as HTMLInputElement;
const num2e = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResluts: number[] = [];

function addt(num1: number, num2: number) {
  return num1 + num2;
}
function printResult(resultObj: { val: number; time: Date }) {
  console.log(resultObj.val, resultObj.time);
}

buttonElement?.addEventListener("click", () => {
  const num1 = num1e.value;
  const num2 = num2e.value;
  const result = addt(+num1, +num2);
  numResluts.push(result);
  printResult({ val: result, time: new Date() });
});

const myPromise = new Promise<string>((res, rej) => {
  setTimeout(() => {
    res("it worked");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split("w"));
});
