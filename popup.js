chrome.tabs.query(
    { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function(tabs) {
      const { id: tabId } = tabs[0].url;
      let code = `document.querySelector('h1')`;
      // http://infoheap.com/chrome-extension-tutorial-access-dom/
      chrome.tabs.executeScript(tabId, { code }, function (result) {
        // result has the return value from `code`
      });
    }
  );