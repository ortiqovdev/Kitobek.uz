let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let active = document.getElementsByClassName("active");

btn.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}