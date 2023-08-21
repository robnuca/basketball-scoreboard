let homeCounter         = document.getElementById("home-counter")
let guestCounter        = document.getElementById("guest-counter")
let textConfirmation    = document.getElementById("text-confirmation")
let timeDisplay         = document.getElementById("local-time")
let timerDisplay        = document.getElementById("timer-display")
let homeCount           = 0
let guestCount          = 0

let timeInSecs;
let ticker;

function homeIncrementOne() {
    homeCount += 1
    homeCounter.textContent = homeCount
    winningTeam()
}

function homeIncrementTwo() {
    homeCount += 2
    homeCounter.textContent = homeCount
    winningTeam()
}

function homeIncrementThree() {
    homeCount += 3
    homeCounter.textContent = homeCount
    winningTeam()
}

function guestIncrementOne() {
    guestCount += 1
    guestCounter.textContent = guestCount
    winningTeam()
}

function guestIncrementTwo() {
    guestCount += 2
    guestCounter.textContent = guestCount
    winningTeam()
}

function guestIncrementThree() {
    guestCount += 3
    guestCounter.textContent = guestCount
    winningTeam()
}

setInterval(timeView, 1000);

// View the local time
function timeView() {
    const date = new Date();
    timeDisplay.innerHTML = date.toLocaleTimeString('en-US')
}

//Start the timer for one quarter
function startTimer(secs) {
  timeInSecs = parseInt(secs)
  ticker = setInterval("tick()", 1000)
}

// Countdown ticker
function tick() {
  let secs = timeInSecs
  if (secs > 0) {
    timeInSecs--
  } else {
    clearInterval(ticker)
    startTimer(12 * 60) // 12 minutes in seconds
  }

  let mins = Math.floor(secs / 60)
  secs %= 60

  let result = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs

  timerDisplay.innerHTML = result
}

// Start the countdown for the quarter
function countDown() {
    startTimer(12 * 60) // 12 minutes in seconds
}

// Stop the timer
function stopTimer() {
    confirm("Are you sure you want to stop the timer?")
    clearInterval(ticker)
}

// Reset the timer
function resetTimer() {
    confirm("Are you sure you want to reset the timer?")
    clearInterval(ticker)
    startTimer(12 * 60)
}

// Start a new game
function newGame() {
    if (confirm("The score will be re-set. Are you sure you want to proceed?")) {
        homeCounter.textContent     = 0
        guestCounter.textContent    = 0
        homeCount   = 0
        guestCount  = 0
        textConfirmation.textContent = "The score has been reset!"
        homeCounter.style.color     = ""
        guestCounter.style.color    = ""
        clearInterval(ticker)
        timerDisplay.innerHTML = "12:00"
    } else {
        textConfirmation.textContent = "The game is still on!"
    }
}

// Style the winning/losing teams. If score is equal, reset the score styling
function winningTeam() {
    let homeCounterValue    = homeCounter.innerHTML
    let guestCounterValue   = guestCounter.innerHTML
    
    if (Number(homeCounterValue) > Number(guestCounterValue)) {
        homeCounter.style.color     = "#34D399"
        guestCounter.style.color    = ""
    } else if (Number(homeCounterValue) < Number(guestCounterValue)) {
        guestCounter.style.color    = "#34D399"
        homeCounter.style.color     = ""
    } else {
        homeCounter.style.color     = ""
        guestCounter.style.color    = ""
    }
}
