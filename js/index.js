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

let seconds_timer = null;
let mins_timer = null;
let hrs_timer = null;

const timer = () => {
  let totalSecs = secInput.value;
  let totalMins = minInput.value;
  let totalHrs = hrsInput.value;

  defaultBtn.classList.toggle("pause");
  if (defaultTxt.innerHTML === "Start") {
    defaultTxt.innerHTML = "Pause";
  } else if (defaultTxt.innerHTML === "Pause") {
    defaultTxt.innerHTML = "Start";
  }

  seconds_timer = setInterval(() => {
    totalSecs--;
    console.log(totalSecs);
    secInput.value = totalSecs;

    if (totalMins !== 0 && totalSecs === 0) {
      totalSecs = "60";
      totalMins--;
      minInput.value = totalMins;

      //hours does not deduct after first deduction
      if (totalHrs !== 0 && totalMins === 0) {
        totalMins = "60";
        totalHrs--;
        hrsInput.value = totalHrs;
      }
    } else if (totalSecs === 0 && totalMins === 0) {
      clearInterval(seconds_timer);
      alert("Time's Up!");
      secInput.value = "0";

      defaultBtn.classList.remove("pause");
      defaultBtn.innerHTML = "Start";
    }
  }, 1000);
};

//pause and reset is not working properly,
//probably because the seconds_timer's setInterval id is being called
//inside the timer function.
//if thats not the case, i dont know why the fuck is clearInterval aint working
defaultBtn.addEventListener("click", () => {
  if (seconds_timer == null) {
    timer();
  } else if (seconds_timer !== null) {
    clearInterval(seconds_timer);
    timer();
  }
});

resetBtn.addEventListener("click", () => {
  secInput.value = "00";
  minInput.value = "00";
  hrsInput.value = "00";
  clearInterval(seconds_timer);
});

/* 현재 문제:
1. 입력전 디폴트로 숫자가 00으로 세팅되어있게하기
2. pause기능 구현
3. reset기능 구현
 */
