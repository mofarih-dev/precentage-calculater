let value = document.getElementById("value");
let total = document.getElementById("total");
let result = document.getElementById("result");
let calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", () => {
  if ((value.value !== "") & (total.value !== "")) {
    let finalResult = (value.value / total.value) * 100;
    result.innerHTML = `${
      String(finalResult).length > 3
        ? String(finalResult).slice(0, 5)
        : finalResult
    }%`;
  } else {
    alert("من فضلك املأ كل الحقول ");
  }
});
