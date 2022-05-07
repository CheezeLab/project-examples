const h1 = document.querySelector("div.hello:first-child h1");

h1.innerText = "Hello World";
h1.style.color = "red";

// console.dir(h1);
// console.log(h1);

// h1.addEventListener("click", () => {
//   h1.style.color = "blue";
//   console.log("h1 was clicked");
// });

function handleClick() {
  const currColor = h1.style.color;
  let newColor;

  if (currColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor;
}

function handleMouseEnter() {
  h1.innerText = "Mouse Enter";
}

function handleMouseLeave() {
  h1.innerText = "Mouse Leave";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copy");
}

function handleWindowOffline() {
  alert("No Wifi");
}
function handleWindowOnline() {
  alert("Wifi connected");
}

h1.addEventListener("click", handleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
