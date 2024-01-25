let toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
