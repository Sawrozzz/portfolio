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

function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_1xarxli", "template_e78y81v", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
