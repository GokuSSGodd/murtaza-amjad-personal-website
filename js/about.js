// Initialize slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelector('.dots');
let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dots.appendChild(dot);
});

// Dragging functionality
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// Touch events
slides.forEach((slide, index) => {
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
});

function touchStart(index) {
    return function(event) {
        currentIndex = index;
        startPos = getPositionX(event);
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        slider.style.cursor = 'grabbing';
    };
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    slider.style.cursor = 'grab';

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
    const slideWidth = slides[0].offsetWidth + 20;
    currentTranslate = currentIndex * -slideWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateActiveStates();
}

function updateActiveStates() {
    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    // Update dots
    dots.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Window resize handling
window.addEventListener('resize', setPositionByIndex);

// Prevent context menu
window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// Mobile dropdown functionality
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Close all other dropdowns
        dropdownBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
                otherBtn.nextElementSibling.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        btn.classList.toggle('active');
        btn.nextElementSibling.classList.toggle('active');
    });
}); 