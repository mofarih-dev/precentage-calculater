//drobdown elemnts
let settingBtn = document.getElementById("setting-btn");
let dropdownMenu = document.getElementById("dropdown-menu");
let darkModeToggle = document.getElementById("dark-mode");
let lightModeToggle = document.getElementById("light-mode");
// calculater elemnts
let value = document.getElementById("value");
let total = document.getElementById("total");
let result = document.getElementById("result");
let calcBtn = document.getElementById("calc-btn");
// appearance elemnts
const appearance = document.getElementById("appearance");
const userTheme = localStorage.getItem("theme");
const themeIcons = document.getElementById("theme-icons");
// translate elemnts
const userLanguage = localStorage.getItem("lang");
const Ar = document.getElementById("ar");
const En = document.getElementById("en");
const lang = document.getElementById("lang");
const precentageCalc = document.getElementById("precntage-calc");

calcBtn.addEventListener("click", () => {
  if ((value.value !== "") & (total.value !== "")) {
    let finalResult = (value.value / total.value) * 100;
    result.innerHTML = `${
      String(finalResult).length > 3
        ? String(finalResult).slice(0, 4)
        : finalResult
    }%`;
  } else {
    alert("من فضلك املأ كل الحقول");
  }
});

settingBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  dropdownMenu.classList.add("hidden");
});

lightModeToggle.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  dropdownMenu.classList.add("hidden");
  localStorage.removeItem("theme");
});

window.addEventListener("load", () => {
  // get the user Theme from local storage
  if (userTheme === "dark") {
    document.documentElement.classList.add(userTheme);
  }
  //translate to English
  if (userLanguage === "en") {
    appearance.innerHTML = "Appearance";
    appearance.classList.remove("text-right");
    themeIcons.classList.remove("justify-end");
    Ar.innerHTML = "Arabic";
    Ar.classList.remove("text-right");
    En.innerHTML = "English";
    En.classList.remove("text-right");
    lang.innerHTML = "language";
    lang.classList.remove("text-right");
    precentageCalc.innerHTML = "Precentage Calculater";
    value.placeholder = "Value";
    value.dir = "ltr";
    total.placeholder = "Total";
    total.dir = "ltr";
    calcBtn.innerHTML = "Calc";
  } else {
    localStorage.removeItem("lang");
  }
});

En.addEventListener("click", () => {
  localStorage.setItem("lang", "en");
  dropdownMenu.classList.add("hidden");
  window.location.reload();
});
Ar.addEventListener("click", () => {
  if (userLanguage === "en") {
    localStorage.removeItem("lang");
  }
  dropdownMenu.classList.add("hidden");
  window.location.reload();
});
