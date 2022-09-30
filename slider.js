let slider = document.querySelector(".slider");
let images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
let imageindex = 0;
function slide_left() {
    if(imageindex <= 0) imageindex = images.length;
    imageindex--;
    return thatimg();
}


function slide_right() {
    if(imageindex >= images.length -1) imageindex = -1;
    imageindex ++;
    return thatimg();
    
}


function thatimg() {
    return slider.setAttribute("src", "images/" + images[imageindex]);
}

setInterval(() => {
    slide_left();
    
}, 3000);

