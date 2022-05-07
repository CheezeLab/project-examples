const h1 = document.querySelector("div.hello:first-child h1");

// function handleClick() {
//   const clickedClass = "active";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleClick);
