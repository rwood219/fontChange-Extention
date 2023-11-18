//get initial values
const body = document.querySelector("body");
const bodyBackgroundColor = window
  .getComputedStyle(document.body)
  .getPropertyValue("background-color");

  const bodyFontSizeInitial = window
  .getComputedStyle(document.body)
  .getPropertyValue("font-size");
//reset values
clear = () => {
  body.style.backgroundColor = bodyBackgroundColor;
  body.style.fontSize = bodyFontSizeInitial
};

// Function to change color
function changeColor() {
  console.log("change color btn clicked");
  const body = document.querySelector("body");

  // Generate random RGB values
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Set the background color
  body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

  function decreaseFontSize() {
    const bodyFontSize = window
    .getComputedStyle(document.body)
    .getPropertyValue("font-size");

  // Parse the font size as a float (removing 'px' or other units)
  let currentFontSize = parseFloat(bodyFontSize);

  // Add 0.1em to the current font size
  currentFontSize = currentFontSize - 0.5;
  // Apply the new font size to the body element
  document.body.style.fontSize = currentFontSize + "px";
  }

 increaseFontSize = () => {
  // Get the current computed font size of the body element
  const bodyFontSize = window
    .getComputedStyle(document.body)
    .getPropertyValue("font-size");

  // Parse the font size as a float (removing 'px' or other units)
  let currentFontSize = parseFloat(bodyFontSize);

  // Add 0.1em to the current font size
  currentFontSize += 0.5;

  // Apply the new font size to the body element
  document.body.style.fontSize = currentFontSize + "px";

  console.log("Font size increased to:", currentFontSize);
}

// Listen for messages from the extension
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "increaseFontSize") {
    increaseFontSize();
  }
  if (request.action === "changeColor") {
    changeColor();
  }
  if (request.action === "clear") {
    clear();
  }
  if(request.action === "decreaseFontSize"){
    decreaseFontSize()
  }
});
