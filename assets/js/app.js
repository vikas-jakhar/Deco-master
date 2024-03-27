const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})

document.querySelector('.menuicon').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
})