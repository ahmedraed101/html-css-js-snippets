const button = document.querySelector("button");
const loginForm = document.querySelector("form");
button.onclick = function () {
    alert(this.innerHTML);
    loginForm.style.display = "block";
}
