/*
    Moving to the previous slide
    
    1) As we did with 'moveToNextSlide', call 'hideAllSlides' within 'moveToPrevSlide'
    2) Check if the slidePosition === 0, if it is, we know that we're on the first slide, so to go back, we take 'totalSlides' and decrease the value by 1. An example: 3-1 = 2, which gives us slidePosition 2 which is the last item in our array of slides [0, 1, 2] <- these are the indexes in the array, the actual values can be accessed by 'slides[slidePosition]' as we did for 'moveToNextSlide'
    3) If we are not on the 'slidePosition' of 0, we are not on the first slide item, therefore we just decrease 'slidePosition'. This is the reason we check for 0 prior, because if we are on 0 and try decrease from 0, we'll end up passing an index value to the 'slides' that doesn't exist - 'slides[-1]' <- like so! This will cause an error!
    4) As we did in 'moveToNextSlide', we want to add the class of 'carousel-item-visible'
    5) Check both your buttons and see the result!
*/

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}