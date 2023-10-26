//текущий год
let today = new Date();
let year = today.getFullYear();
document.querySelector(".year").textContent = "(c)" + year; 
//текущий год

// всплывающая подсказка
tippy('[data-tippy-content]');

// пролистывание вниз по клику
document.querySelector(".prices_down").addEventListener("click", handleButtonClick1);
function handleButtonClick1() {
    document.querySelector(".footer_prices").scrollIntoView({ block: "center", behavior: "smooth" });
  };

  document.querySelector(".see_prices").addEventListener("click", handleButtonClick1);
function handleButtonClick1() {
    document.querySelector(".footer_prices").scrollIntoView({ block: "center", behavior: "smooth" });
  };

  document.querySelector(".spec_of_down").addEventListener("click", handleButtonClick2);
function handleButtonClick2() {
    document.querySelector(".spec_offer").scrollIntoView({ block: "center", behavior: "smooth" });
  };
  
  document.querySelector(".see_spec_prices").addEventListener("click", handleButtonClick2);
function handleButtonClick2() {
    document.querySelector(".spec_offer").scrollIntoView({ block: "center", behavior: "smooth" });
  };
  
  document.querySelector(".our_advantages").addEventListener("click", handleButtonClick3);
function handleButtonClick3() {
    document.querySelector(".parallax_1").scrollIntoView({ block: "center", behavior: "smooth" });
  };
  
  



