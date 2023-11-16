console.log("popup running");

//Event Listeners Send Message to Content.js

document.getElementById("increaseFontBtn").addEventListener("click", () => {
  console.log("button clicked");
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: "increaseFontSize" });
    });
});
document.getElementById("change-color-button").addEventListener("click", () => {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: "changeColor" });
    });
});

document.getElementById("clear").addEventListener("click", () => {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: "clear" });
    });
});
