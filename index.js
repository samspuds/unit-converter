/*
1 kilometer = 0.6214 miles
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 stone = 6.350293kg
*/
myUnit = [];
const inputEl = document.querySelector("#unit");
const convertBtn = document.querySelector("#convert-btn");
const lengthValue = document.querySelector("#length-value");
const volumeValue = document.querySelector("#volume-value");
const massValue = document.querySelector("#mass-value");

const kmToMiles = 0.6214;
const literToGallon = 0.264;
const stonesToPound = 6.350293;

const milesToKm = 1.609344;
const gallonToLiter = 3.785411784;
const poundsToStone = 0.0714285714;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;
  if (baseValue == 1) {
    lengthValue.textContent = `${baseValue} kilometer = ${(
      baseValue * kmToMiles
    ).toFixed(3)} miles | ${baseValue} mile = ${(baseValue * milesToKm).toFixed(
      3
    )} kilometers`;
  } else if (baseValue !== 1) {
    lengthValue.textContent = `${baseValue} kilometers = ${(
      baseValue * kmToMiles
    ).toFixed(3)} miles | ${baseValue} miles = ${(
      baseValue * milesToKm
    ).toFixed(3)} kilometers`;
  }

  if (baseValue == 1) {
    volumeValue.textContent = `${baseValue} liter = ${(
      baseValue * literToGallon
    ).toFixed(3)} gallons | ${baseValue} gallon = ${(
      baseValue * gallonToLiter
    ).toFixed(3)} liters`;
  } else if (baseValue !== 1) {
    volumeValue.textContent = `${baseValue} liters = ${(
      baseValue * literToGallon
    ).toFixed(3)} gallons | ${baseValue} gallons = ${(
      baseValue * gallonToLiter
    ).toFixed(3)} liters`;
  }

  if (baseValue == 1) {
    massValue.textContent = `${baseValue} stone = ${(
      baseValue * stonesToPound
    ).toFixed(3)} pounds | ${baseValue} pound = ${(
      baseValue * poundsToStone
    ).toFixed(3)} stones`;
  } else if (baseValue !== 1) {
    massValue.textContent = `${baseValue} stones = ${(
      baseValue * stonesToPound
    ).toFixed(3)} pounds | ${baseValue} pounds = ${(
      baseValue * poundsToStone
    ).toFixed(3)} stones`;
  }
});
