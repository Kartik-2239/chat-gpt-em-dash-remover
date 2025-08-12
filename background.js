const chatGPT = 'https://chatgpt.com/c/';


chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(chatGPT)) {
    
    await chrome.scripting.executeScript({
        target :{tabId: tab.id},
        files : ["script.js"],
    });
  }
});
