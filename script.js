document.addEventListener("DOMContentLoaded", function () {
  // Handle quantity change
  const quantityButtons = document.querySelectorAll(".quantity-button");

  quantityButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.parentNode.querySelector(".quantity");
      let currentQuantity = parseInt(quantityElement.textContent);

      if (this.classList.contains("increase")) {
        quantityElement.textContent = currentQuantity + 1;
      } else if (this.classList.contains("decrease") && currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
      }
    });
  });

  // Handle FAQ toggle
  const faqItems = document.querySelectorAll(".faq-question");

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
