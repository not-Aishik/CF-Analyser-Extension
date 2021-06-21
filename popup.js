chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let current_url = tabs[0].url;
  let handle = "";
  let i = current_url.length - 1;
  while (i >= 0 && current_url.charAt(i) != "/") {
    handle += current_url.charAt(i);
    i--;
  }
  handle = handle.split("").reverse().join("");
  chrome.tabs.sendMessage(tabs[0].id, { userID: handle });
});
