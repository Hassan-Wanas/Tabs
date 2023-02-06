let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs); let
divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    tabsArray.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none"
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
  })
})