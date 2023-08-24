// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const inputEl = document.querySelector("input");
const convertBtn = document.getElementById("convert-btn");
const lengthRes = document.getElementById("length-res");
const volumeRes = document.getElementById("volume-res");
const massRes = document.getElementById("mass-res");

convertBtn.addEventListener("click", function () {
  launchConversion(inputEl.value);
});

function metersFeetsConverter(num) {
  let feetsResult = num * 3281;
  let metersResult = num * 0.3048;

  lengthRes.textContent = `${inputEl.value} meters = ${feetsResult.toFixed(
    3
  )} feet | ${inputEl.value} feet = ${metersResult.toFixed(3)} meters`;
}

function litersGallonsConverter(num) {
  let gallonsResult = num * 0.264;
  let litersResult = num * 3.785;

  volumeRes.textContent = `${inputEl.value} liters = ${gallonsResult.toFixed(
    3
  )} gallons | ${inputEl.value} gallons = ${litersResult.toFixed(3)} liters`;
}

function kilogramsPoundsConverter(num) {
  let poundsResult = num * 2.204;
  let kilogramsResult = num * 0.453;

  massRes.textContent = `${inputEl.value} = ${poundsResult.toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${kilogramsResult.toFixed(3)} kilos`;
}

function launchConversion(num) {
  metersFeetsConverter(num);
  litersGallonsConverter(num);
  kilogramsPoundsConverter(num);
}
