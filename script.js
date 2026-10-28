
/* NEXORA AI — Website Interactions */

document.addEventListener("DOMContentLoaded", function () {
  // Smoothly handle navigation links
  const navigationLinks = document.querySelectorAll(
    '.navigation a[href^="#"]'
  );

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Show a message when a product button is selected
  const productButtons = document.querySelectorAll(".product-button");

  productButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      alert(
        "Thank you for your interest in NEXORA AI! Product details will be available soon."
      );
    });
  });

  console.log("NEXORA AI website loaded successfully.");
});
