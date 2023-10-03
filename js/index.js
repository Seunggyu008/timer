const hrsSelector = document.querySelector(".hrs-display");
const minSelector = document.querySelector(".hrs-display");
const secSelector = document.querySelector(".hrs-display");
const hrsInput = document.getElementById("hrs-input");
const minInput = document.getElementById("min-input");
const secInput = document.getElementById("sec-input");
const secInputDisplay = document.getElementById("sec-input-value");
const defaultBtn = document.querySelector(".default-btn");
const defaultTxt = document.querySelector(".default-txt");
const resetBtn = document.querySelector(".reset-btn");

let timer_sec;
let timer_hrs;
let timer_mins;
let timer_secs;

//let totalSeconds = secInput.value;

/* start버튼을 누르면 start의 색깔이 바뀌고, text도 바뀐다. start => pause pause => start*/
/* start 버튼을 누르면 입력된 타이머가 차감된다 */
defaultBtn.addEventListener("click", function () {
  let totalSeconds = secInput.value;
  let totalMins = minInput.value;
  let totalHrs = hrsInput.value;

  defaultBtn.classList.toggle("pause");
  if (defaultTxt.innerHTML === "Start") {
    defaultTxt.innerHTML = "Pause";
  } else if (defaultTxt.innerHTML === "Pause") {
    defaultTxt.innerHTML = "Start";
  }

  let hrs_timer = setInterval(() => {});

  let seconds_timer = setInterval(() => {
    totalSeconds--;
    console.log(totalSeconds);
    secInput.value = totalSeconds;

    if (totalSeconds === 0) {
      let mins_timer = setInterval(() => {
        totalMins--;
        minInput.value = totalMins;
      }, 60000);

      clearInterval(seconds_timer);
      alert("타이머가 끝났습니다!");
      secInput.value = "0";

      defaultBtn.classList.remove("pause");
      defaultTxt.innerHTML = "Start";
    }
  }, 1000);
});

/* 현재 문제:
1. 버튼을 누르면 setInterval 함수가 계속 호출됨
2. pause를 눌렀을때 숫자를 멈추는 방법을 모르겠음
3. 시 -> 분 -> 초 순서대로 숫자가 차감되는법
 */
