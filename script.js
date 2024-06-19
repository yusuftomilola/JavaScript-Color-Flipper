const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "purple";

function handleColor(bgcolor) {
  const greenBtn = document.getElementById("green");
  body.style.backgroundColor = bgcolor;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);

  body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;

  console.log(body.style.backgroundColor);
}
