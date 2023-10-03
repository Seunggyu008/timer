const hrsSelector = document.querySelector(".hrs-display");
const minSelector = document.querySelector(".hrs-display");
const secSelector = document.querySelector(".hrs-display");
const hrsInput = document.getElementById("hrs-input");
const minInput = document.getElementById("min-input");
const secInput = document.getElementById("sec-input"); 
const defaultBtn = document.querySelector('.default-btn');
const defaultTxt = document.querySelector('.default-txt');
const resetBtn = document.querySelector('.reset-btn');

const time = [parseInt(hrsInput.value), parseInt(minInput.value), parseInt(secInput.value)];


/* start버튼을 누르면 start의 색깔이 바뀌고, text도 바뀐다. start => pause pause => start*/
/* start 버튼을 누르면 입력된 타이머가 차감된다 */
defaultBtn.addEventListener('click', function() {
    let totalSeconds = secInput.value;

    defaultBtn.classList.toggle("pause")
    if(defaultTxt.innerHTML === "Start") {
        defaultTxt.innerHTML = "Pause";
    } else {
        defaultTxt.innerHTML = "Start";
    } 


    setInterval(() => {
        if(totalSeconds >= 0) {
            totalSeconds--;
            console.log(totalSeconds);
        }
    }, 1000);
})

//내일 구현할것:
/* 
1. 1초 단위로 초 줄이기
2. 줄어드는 초 화면에 보이기
3. pause 버튼 누르면 초 멈추고 start 버튼으로 바뀌기
4. 0에 도달하면 start버튼으로 바뀌고 시간 끝났다고 alert 창 띄우기.
*/







