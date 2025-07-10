document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.querySelector(".ozon-top-btn");
  const restartBtn = document.querySelectorAll(".otvet-btn");
  const centerBlock = document.querySelector(".ozon-center");
  const slideLine = document.querySelector(".slide-line-sp");
  const slideNum = document.querySelector(".rez-count");

  const mediaQuery = window.matchMedia("(max-width: 600px)");
  //================================== Start btn

  startBtn.addEventListener("click", () => {
    startBtn.classList.add("active");
    centerBlock.classList.add("active");

    if (mediaQuery.matches) {
      centerBlock.scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      document.querySelector(".start-scroll").scrollIntoView({ block: "start", behavior: "smooth" });
    }
    // centerBlock.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  //================================== Restart btn

  restartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      startBtn.classList.add("active");
      centerBlock.classList.add("active");
      centerBlock.scrollIntoView({ block: "start", behavior: "smooth" });
      document.querySelectorAll(".ozon-otvet").forEach((item) => {
        item.classList.remove("active");
      });
    });
  });

  //=================================== Li

  // function closest(el, selector) {
  //   if (Element.prototype.closest) {
  //     return el.closest(selector);
  //   }
  //   let parent = el;
  //   while (parent) {
  //     if (parent.matches(selector)) {
  //       return parent;
  //     }

  //     parent = parent.parentElement;
  //   }
  //   return null;
  // }

  const allLi = document.querySelectorAll(".cards li");
  const cards = document.querySelectorAll(".card");
  let counter = 0;

  allLi.forEach((item) => {
    item.addEventListener("click", function () {
      if (this.classList.contains("true")) {
        this.classList.add("active", "green");
        counter++;
      } else {
        this.classList.add("active", "red");
      }

      const parentCard = item.closest(".card");
      parentCard.classList.add("btn");
      parentCard.querySelector('.card-bot-wrap').scrollIntoView({ block: "center", behavior: "smooth" });
      setTimeout(() => {
        parentCard.querySelector('.card-bot-wrap').classList.add('active')
      }, 0.2);
      // closest(item, ".card").classList.add("btn");
    });
  });

  //======================================= Filter Img & Test

  const otvet1 = document.querySelector(".ozon-rez");
  const otvet2 = document.querySelector(".ozon-otvet-2");
  const otvet3 = document.querySelector(".ozon-otvet-3");

  let filter = document.querySelectorAll("[data-filter]");

  let slideLineWidth = 12.5;
  let slideNumCount = 1;

  filter.forEach(function (item) {
    item.addEventListener("click", function () {
      // if (slideNumCount < 8) {
      //   slideNumCount++;
      //   slideLineWidth += 12.5;
      //   // slideNum.innerHTML = `${slideNumCount}`;
      // }

      // console.log(counter);

      let cat = item.dataset.filter;

      // slideLine.style.cssText = `
      //       width: ${slideLineWidth}%;
      //       `;

      if (cat == "end") {
        // centerBlock.classList.remove("active");
        slideNum.innerHTML = `${counter}`;
        otvet1.classList.add("active");
        otvet1.scrollIntoView({ block: "center", behavior: "smooth" });
        item.classList.add("hide");

        // allLi.forEach((item) => {
        //   item.classList.remove("active", "red", "green");
        // });
        // cards.forEach((item) => {
        //   item.classList.remove("btn");
        // });

        // counter = 0;
        // slideLineWidth = 12.5;
        // slideNumCount = 1;
        // slideNum.innerHTML = `${slideNumCount}`;

        // slideLine.style.cssText = `
        //         width: ${slideLineWidth}%;
        //         `;

        // document.querySelectorAll("[data-cat]").forEach(function (workItem) {
        //   workItem.classList.remove("active");
        // });

        // document.querySelectorAll("[data-img]").forEach(function (workImg) {
        //   workImg.classList.remove("active");
        // });
      } else {
        document.querySelectorAll("[data-cat]").forEach(function (workItem) {
          let workCat = workItem.dataset.cat;
          item.classList.add("hide");
          if (workCat == cat) {
            workItem.classList.add("active");
            workItem.scrollIntoView({ block: "center", behavior: "smooth" });
          }
        });

        document.querySelectorAll("[data-img]").forEach(function (workImg) {
          let workCat2 = workImg.dataset.img;
          if (workCat2 == cat) {
            workImg.classList.add("active");
          }
        });
      }
    });
  });
});
