chrome.tabs.executeScript(null, {file: "jquery-2.1.4.min.js"});
chrome.tabs.executeScript(null, {file: "arrive.min.js"});

$(function() {

    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete') {
            chrome.tabs.executeScript(null, {
                "code": 'document.getElementById("crowdfunding").className'
            }, function (result) {
                if (result[0]=="btn-a") {
                }
            });
      }
    });
});


var isRun = false

function stop() {
    isRun = false
    if (timer) { clearTimeout(timer) }
}

$("#run_btn")[0].onclick = function() {
    isRun = true

    timer = setInterval(function() {
        chrome.tabs.reload(null,null,function() {
            console.log("reload!")
        });
    }, $("#refresh")[0].value);
};

$("#stop_btn")[0].onclick = function() {
    stop()
}
