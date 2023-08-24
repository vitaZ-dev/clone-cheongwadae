console.log("청와대 사이트 클론코딩");
/* * * * * * */
const $header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");
const gnbMain = document.querySelector(".gnb .main-menu");
const gnbItems = document.querySelectorAll(".gnb .main-menu > li");

const gnbSide = document.querySelector("nav.gnb-side");
const gnbOpen = document.querySelector(".gnb-open");
const gnbClose = document.querySelector(".gnb-close");

const active = "is--active";

gnb.addEventListener("mouseenter", () => {
  $header.classList.add(active);
  gnbMain.classList.add(active);
});
gnb.addEventListener("mouseleave", () => {
  $header.classList.remove(active);
  gnbMain.classList.remove(active);
});

gnbItems.forEach((item) => {
  let target = item.children[1];
  if (target) {
    item.addEventListener("mouseenter", () => {
      target.classList.add(active);
    });
    item.addEventListener("mouseleave", () => {
      target.classList.remove(active);
    });
  }
});

gnbOpen.addEventListener("click", () => {
  gnbSide.classList.add("gnb-side-show");
});
gnbClose.addEventListener("click", () => {
  gnbSide.classList.remove("gnb-side-show");
});
