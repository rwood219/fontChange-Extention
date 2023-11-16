console.log('popup running')

document.getElementById('increaseFontBtn').addEventListener('click', function () {
    console.log('button clicked')
    browser.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: 'increaseFontSize' });
    });
  });

  document.getElementById('change-color-button').addEventListener('click', () => {
    browser.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: 'changeColor' });
    });
  });
  
