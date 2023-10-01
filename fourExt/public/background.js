const css = `
#controlHelpMeOut,.controlHelpMeOut {
  display: flex;
  justify-self: center;
  align-items: center;
  background-color: rgb(20, 20, 20);
  color: white;
  padding: 10px;
  padding-bottom: 0;
  height: 100px;
  width: max-content;
  border-radius: 100px;
  box-shadow: 0 0 5px 3px rgb(165, 150, 150);
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -50%);
}

.time {
  display: flex;
  gap: 2;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-right: 1px solid white;
  padding: 0 20px;
  margin-right: 20px;
}

.dot {
  height: 8px;
  width: 8px;
  color: white;
  background-color: red;
  border-radius: 9999px;
  margin-left: 20px;
  box-shadow: 0 0 5px 3px rgb(149, 8, 8);
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  display: grid;
  place-items: center;
  margin-right: 20px;
}

.btn > span {
  display: grid;
  place-content: center;
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  background-color: aliceblue;
  color: #120b48;
  cursor: pointer;
}
`;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
  chrome.scripting.insertCSS({
    target: { tabId: tabId },
    css: css,
  });
});
