//drobdown elemnts
let settingBtn = document.getElementById("setting-btn");
let dropdownMenu = document.getElementById("dropdown-menu");
let darkModeToggle = document.getElementById("dark-mode");
let lightModeToggle = document.getElementById("light-mode");
let developer = document.getElementById("developer");
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
// calculater elemnts
let value = document.getElementById("value");
let total = document.getElementById("total");
let result = document.getElementById("result");
let calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", () => {
  if ((value.value !== "") & (total.value !== "")) {
    let finalResult = (value.value / total.value) * 100;
    result.innerHTML = `${
      String(finalResult).length > 3
        ? String(finalResult).slice(0, 4)
        : finalResult
    }%`;
  } else {
    let warn =
      localStorage.getItem("lang") === "en"
        ? "please fill all inputs!"
        : "من فضلك املأ كل الحقول!";
    alert(warn);
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
    Ar.innerHTML = "Arabic";
    En.innerHTML = "English";
    lang.innerHTML = "language";
    precentageCalc.innerHTML = "Precentage Calculater";
    value.placeholder = "Value";
    total.placeholder = "Total";
    calcBtn.innerHTML = "Calc";
    [developer, themeIcons].forEach((e) => {
      e.classList.remove("justify-end");
    });
    [value, total].forEach((e) => {
      e.dir = "ltr";
    });
    [appearance, Ar, En, lang].forEach((e) => {
      e.classList.remove("text-right");
    });
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
