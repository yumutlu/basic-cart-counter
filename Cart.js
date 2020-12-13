var button = document.querySelector('#remove-button');

var button2 = document.querySelector('#add-button');

var display = document.querySelector('#count');

var count = 0;

button.addEventListener('click', function () {
    if (count > 0)
        count--
    display.innerHTML = count;
});
button2.addEventListener('click', function () {
    count++
    display.innerHTML = count;
});