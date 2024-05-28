const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach(e => {
        var windowHeight = window.innerHeight;
        var revealTop = e.getBoundingClientRect().top;
        var revealPoints = 150;

        if (revealTop < windowHeight - revealPoints) {
            e.classList.add('scrollActive')
        } else {
            e.classList.remove('scrollActive')
        }
    });
}
window.addEventListener("scroll", reveal);

$('.numberChange').counterUp({
    delay: 10,
    time: 1000
});