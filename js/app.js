const personInfo = [];
const daily = document.getElementById("js-daily");
const weekly = document.getElementById("js-weekly");
const monthly = document.getElementById("js-monthly");

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    return data.map((time) => personInfo.push(time));
  });

function setInfo(period) {
  const workCurrent = document.getElementById("js-work-current");
  const workPrevious = document.getElementById("js-work-previous");
  const playCurrent = document.getElementById("js-play-current");
  const playPrevious = document.getElementById("js-play-previous");
  const studyCurrent = document.getElementById("js-study-current");
  const studyPrevious = document.getElementById("js-study-previous");
  const exerciseCurrent = document.getElementById("js-exercise-current");
  const exercisePrevious = document.getElementById("js-exercise-previous");
  const socialCurrent = document.getElementById("js-social-current");
  const socialPrevious = document.getElementById("js-social-previous");
  const selfCareCurrent = document.getElementById("js-self-care-current");
  const selfCarePrevious = document.getElementById("js-self-care-previous");

  personInfo.map((info) => {
    const { title, timeframes } = info;
    const { current, previous } = timeframes[period];

    switch (title) {
      case "Work":
        workCurrent.textContent = current;
        workPrevious.textContent = previous;
        break;
      case "Play":
        playCurrent.textContent = current;
        playPrevious.textContent = previous;
        break;
      case "Study":
        studyCurrent.textContent = current;
        studyPrevious.textContent = previous;
        break;
      case "Exercise":
        exerciseCurrent.textContent = current;
        exercisePrevious.textContent = previous;
        break;
      case "Social":
        socialCurrent.textContent = current;
        socialPrevious.textContent = previous;
        break;
      case "Self Care":
        selfCareCurrent.textContent = current;
        selfCarePrevious.textContent = previous;
    }
  });
}

function clearSelected() {
  daily.classList.remove("selected");
  weekly.classList.remove("selected");
  monthly.classList.remove("selected");
}

daily.addEventListener("click", (e) => {
  e.preventDefault();
  clearSelected();
  e.currentTarget.classList.add("selected");
  setInfo("daily");
});

weekly.addEventListener("click", (e) => {
  e.preventDefault();
  clearSelected();
  e.currentTarget.classList.add("selected");
  setInfo("weekly");
});

monthly.addEventListener("click", (e) => {
  e.preventDefault();
  clearSelected();
  e.currentTarget.classList.add("selected");
  setInfo("monthly");
});
