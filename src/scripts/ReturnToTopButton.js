const scrollTop = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTop.classList.add("isShow");
    } else {
        scrollTop.classList.remove("isShow");
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
});