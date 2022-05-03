let slides = document.querySelectorAll('.slider__slide');
let slide = document.querySelector('.slider__slide');
let slider = [];
for (i = 0; i < slides.length; i++) {
    slider[i] = slides[i];
    slides[i].remove();
}


step = 0;
offset = 0;
function draw() {
    let div = document.createElement('div');
    div.id = "p" + step;
    div.classList.add('slider__slide');
    div.style.top = offset * 512 + 'px';
    console.log(div);
    document.querySelector('.slider').appendChild(div);

    if (step + 1 == slides.length) {
        step = 0
        // console.log(s)
    }
    else {
        step++
    }
    offset = 1;
    // function opacity() {
    //     if (div.style.top === 512 + 'px') {
    //         div.style.animation = 'blink';
    //     }
    //     else if (div.style.top == 0 + 'px') {
    //         div.style.animation = 'none';
    //     }
    // }

}
function left() {
    document.onclick = null
    let slides2 = document.querySelectorAll('.slider__slide');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.top = offset2 * 512 - 512 + 'px';
        offset2++;
    }
    setTimeout(() => {
        slides2[0].remove();
        console.log(slides2);
        document.onclick = left;
        draw();
    }, 1000);
}

draw(); draw();
document.onclick = left;