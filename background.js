// background.js
browser.runtime.onInstalled.addListener(function () {
  // Execute content.js when the extension is installed or updated
  browser.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      browser.tabs.executeScript(tab.id, { file: 'content.js' });
    });
  });
});


  