var a = document.createElement("a");
a.innerHTML = "Click on Extension for linking";
a.id = "a";
document.getElementsByClassName("info")[0].appendChild(a);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.userID);
  a.innerHTML = "View statistics of " + request.userID;
  a.className = "linked";
  link = "http://localhost:3000/extension?id=" + request.userID + "";
  a.href = link;
});
