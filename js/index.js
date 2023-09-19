const hrsSelector = document.querySelector(".hrs-display");
const minSelector = document.querySelector(".hrs-display");
const secSelector = document.querySelector(".hrs-display");
const hrsInput = document.querySelector("input");
//const minInput = document.querySelector("min-display");
//const secInput = document.querySelector("sec-display");
const defaultBtn = document.querySelector('.default-btn');
const defaultTxt = document.querySelector('.default-txt');
const resetBtn = document.querySelector('.reset-btn');


/* 인풋이 들어왔을경우 start와 reset의 색깔이 바뀐다 */


/* start버튼을 누르면 start의 색깔이 바뀌고, text도 바뀐다. start => pause pause => start*/
/* start 버튼을 누르면 입력된 타이머가 차감된다 */
defaultBtn.addEventListener('click', function() {
    defaultBtn.classList.toggle("pause")
    if(defaultTxt.innerHTML === "Start") {
        defaultTxt.innerHTML = "Pause";
    } else {
        defaultTxt.innerHTML = "Start";
    }
    for(i = hrsInput.value; i <= 0; i--) {
        console.log(hrsInput);
    }
})






