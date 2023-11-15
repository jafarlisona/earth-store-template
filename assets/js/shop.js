const rangeInputMin = 10;
const rangeInputMax = 30;
const rangeInputStep = 1;

const rangePriceMin = 10;
const rangePriceMax = 30;
const rangePriceStep = 1;

const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
  input.setAttribute("min", rangeInputMin);
  input.setAttribute("max", rangeInputMax);
  input.setAttribute("step", rangeInputStep);

  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeInputStep) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeInputStep;
      } else {
        rangeInput[1].value = minRange + rangeInputStep;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left =
        ((minRange - rangeInputMin) / (rangeInputMax - rangeInputMin)) * 100 +
        "%";
      range.style.right =
        100 -
        ((maxRange - rangeInputMin) / (rangeInputMax - rangeInputMin)) * 100 +
        "%";
    }
  });
});

rangePrice.forEach((input) => {
  input.setAttribute("min", rangePriceMin);
  input.setAttribute("max", rangePriceMax);
  input.setAttribute("step", rangePriceStep);

  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeInputStep && maxPrice <= rangePriceMax) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left =
          ((minPrice - rangeInputMin) / (rangeInputMax - rangeInputMin)) * 100 +
          "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right =
          100 -
          ((maxPrice - rangeInputMin) / (rangeInputMax - rangeInputMin)) * 100 +
          "%";
      }
    }
  });
});
