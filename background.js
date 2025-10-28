chrome.tabs.onCreated.addListener((tab) => {
    console.log("new tab has created: ", tab.url)
})