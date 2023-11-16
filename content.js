// Function to change color
function changeColor() {
  console.log('change color btn clicked')
  const body = document.querySelector('body');

  // Generate random RGB values
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Set the background color
  body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// Add a click event listener for the change color button

// Function to increase font size
function increaseFontSize() {
  // Get the current computed font size of the body element
  const bodyFontSize = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-size');

  // Parse the font size as a float (removing 'px' or other units)
  let currentFontSize = parseFloat(bodyFontSize);

  // Add 0.1em to the current font size
  currentFontSize += 0.1;

  // Apply the new font size to the body element
  document.body.style.fontSize = currentFontSize + 'em';

  console.log('Font size increased to:', currentFontSize);
}

// Listen for messages from the extension
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'increaseFontSize') {
    increaseFontSize();
  }
  if (request.action === 'changeColor') {
    changeColor();
  }
});