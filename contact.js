document.addEventListener("DOMContentLoaded", function () {
  function onClickScroll() {
    const scroll = document.querySelector("#contact");
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth" });
    }
  }
  const skillLink = document.querySelector(".contact");
  if (skillLink) {
    skillLink.addEventListener("click", function (event) {
      event.preventDefault();
      onClickScroll();
    });
  }
});
