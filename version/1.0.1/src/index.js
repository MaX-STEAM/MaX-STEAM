function welcomepage() {
    var vouvou = document.getElementById("vouvou").value;
    localStorage.setItem("username",vouvou);
    location.replace("C:/Users/ROBOT%2002/Desktop/Projet/page/welcome.html")
}
function moh() {
    addEvent(document, "keypress", function (event) {
        event = event || window.event;
        // use e.keyCode
        if (event.keyCode == 13) {
            event.preventDefault();
            document.getElementById("sign_in").click();    
        }
    });
    
}
function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}
