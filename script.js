const slides = document.querySelectorAll('.slide');

function removeActiveClass() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        removeActiveClass();
        slide.classList.add('active');
        // const backgroundSlide = window.getComputedStyle(slide, null).getPropertyValue("background-color");
        // document.body.style.backgroundColor = backgroundSlide;
    })
})