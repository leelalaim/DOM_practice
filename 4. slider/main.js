var prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide');

var index = 0;

function activeSlide(n) {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

function nextSlide() {
    if(index == slides.length - 1) {
        index = slides.length - 1;
    } else {
        index++;
        activeSlide(index);
    }
}

function prevSlide() {
    if(index == 0) {
        index = 0;
    }else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);