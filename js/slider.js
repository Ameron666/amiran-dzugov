//Slider 1
document.getElementById('next1').onclick = function () {
    let lists = document.querySelectorAll('.elem1');
    document.getElementById('slide1').appendChild(lists[0]);
}
document.getElementById('prev1').onclick = function () {
    let lists = document.querySelectorAll('.elem1');
    document.getElementById('slide1').prepend(lists[lists.length - 1]);
}

//Slider 2
document.getElementById('next2').onclick = function () {
    let lists = document.querySelectorAll('.elem2');
    document.getElementById('slide2').appendChild(lists[0]);
}
document.getElementById('prev2').onclick = function () {
    let lists = document.querySelectorAll('.elem2');
    document.getElementById('slide2').prepend(lists[lists.length - 1]);
}

//Slider 3
document.getElementById('next3').onclick = function () {
    let lists = document.querySelectorAll('.elem3');
    document.getElementById('slide3').appendChild(lists[0]);
}
document.getElementById('prev3').onclick = function () {
    let lists = document.querySelectorAll('.elem3');
    document.getElementById('slide3').prepend(lists[lists.length - 1]);
}