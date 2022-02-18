console.log("hello");
/*
var containerAccounts=document.querySelectorAll (.selectionStyle li)
var windowAccounts=document.querySelectorAll(.currentResult)

function showAccounts (panelIndex, colorCode)
    containerAccounts.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    ));
    }
*/
/*
function openAccount(evt, accountNumber) {
    var i, containerAccounts, windowAccounts;
    containerAccounts = document.getElementsByClassName("selectionContainer");
    for (i = 0, i < containerAccounts.length; i++) {
        containerAccounts[i].className = containerAccounts[i].className.replace("active", "")
    }
    windowAccounts = document.getElementsByClassName("currentResult");
    for (i = 0, i < containerAccounts.length; i++) {
        windowAccounts[i].style.display = "none";
    }
    document.getElementById(accountNumber).uedisplay = "block";
    evt.className = + "active";
}
document.getElementById("defaultOpen").click();
*/
// still haven't been able to get tab system to work
/*
function openAccounts(event, accountNumber) {
    var i, containerAccounts, selectionContainer;
    containerAccounts = document.getElementsByClassName("currentResult");
    for (i = 0; i < containerAccounts.length; i++) {
        containerAccounts[i].style.display = "none";
    }
    selectionContainer = document.getElementsByClassName("selectionContainer");
    for (i = 0; i < selectionContainer.length; i++) {
        selectionContainer[i].className = selectionContainer[i].className.replace("active", "");
    }
    document.getElementById(accountNumber).style.display = "block";
    event.currentTarget.className += "active";
}

function openAccounts(event, accountNumber) {
    var addActive = document.getElementById("accountNumber");
    for (i = 0; i < accountNumber.div.length; i++) {
        addActive[i].style.display = "active";
    }
    var buttonSelect = document.getElementsByClassName("active");
    for (i = 0; i < accountButton.length; i++)
        accountButton[i].style.display = "visible";

    var accountSearch = getElementsByClassName(accountButton);
    }

    
document.getElementById("defaultOpen").click();
*/
/*
const tabs = document.querySelectorAll('[data-tab-target]')
const currentResults = document.querySelectorAll(currentResults)

tabs.forEach(tab = function () {
    tab.addEventListener('click' = function ({
        const target = document.querySelector(tab.dataset.tabTarget)
        target.classList.remove('active')
    }))

target.classList.add('active')
})
function (){
    let getAccounts = document.getElementById(function(onClick))
    let addActive = document.getElementsByClassName
}
*/

function openAccount(event, accountSelect) {
    var i, currentResult, accountButton;
    currentResult = document.getElementsByClassName("currentResult");
    for (i = 0; i < currentResult.length; i++) {
        currentResult[i].style.display = "none";
    }
    accountButton = document.getElementsByClassName("accountButton");
    for (i = 0; i < accountButton.length; i++) {
        accountButton[i].className = accountButton[i].className.replace(" active", "");
    }
    document.getElementById(accountSelect).style.display = "block";
    event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

console.log(document.body);