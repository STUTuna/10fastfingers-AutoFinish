document.addEventListener("keyup", function(event) {
    let answer = document.getElementsByClassName('highlight')[0].textContent;
    inputfield.value = answer;
});
