const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})

document.querySelector('.menuicon').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
});

const scrollicon = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 700) {
        scrollicon.style.display = "grid";
    }
    else {
        scrollicon.style.display = "none";
    }
});

scrollicon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})