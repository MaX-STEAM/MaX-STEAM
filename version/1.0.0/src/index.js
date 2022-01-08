function welcomepage() {
    var vouvou = document.getElementById("vouvou").value;
    localStorage.setItem("username",vouvou);
    location.replace("C:/Users/ROBOT%2002/Desktop/Projet/page/welcome.html")
}