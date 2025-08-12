
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

const chatGPT = 'https://chatgpt.com/c/';


chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(chatGPT)) {
    // const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // await chrome.action.setBadgeText({
    //   tabId: tab.id,
    //   text: nextState,
    // });

    // if (nextState === "ON") {

    //   await chrome.scripting.insertCSS({
    //     files: ["focus-mode.css"],
    //     target: { tabId: tab.id },
    // })

    await chrome.scripting.executeScript({
        target :{tabId: tab.id},
        files : ["script.js"],
    });

    // } else if (nextState === "OFF") {
    //   // Remove the CSS file when the user turns the extension off
    //   await chrome.scripting.removeCSS({
    //     files: ["focus-mode.css"],
    //     target: { tabId: tab.id },
    //   });
    // }
  }
});