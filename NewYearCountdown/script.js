const year = document.querySelector(".year");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// Target date: New Year 2026
let newYearDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Update countdown every second
setInterval(() => {
    let now = new Date().getTime(); // current time in ms
    let gap = newYearDate - now;   // remaining time in ms

    // Time calculations
    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let dayMs = hr * 24;

    let d = Math.floor(gap / dayMs);
    let h = Math.floor((gap % dayMs) / hr);
    let m = Math.floor((gap % hr) / min);
    let s = Math.floor((gap % min) / sec);

    // Show values in DOM
    year.innerText = "2026 🎉";
    day.innerText = d;
    hour.innerText = h.toString().padStart(2, "0");
    minutes.innerText = m.toString().padStart(2, "0");
    seconds.innerText = s.toString().padStart(2, "0");

}, 1000);



