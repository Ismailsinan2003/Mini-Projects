const month_name=document.getElementById("month-name")
const Day_name=document.getElementById("day-name")
const day_number=document.getElementById("day-number")
const year=document.getElementById("year")


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let date=new Date()


let day_no=date.getDate()
let fullyear=date.getFullYear()
let full_month=months[date.getMonth()]
let full_day=days[date.getDay()]


day_number.innerText=`${day_no}`
year.innerText=`${fullyear}`
month_name.innerText=`${full_month}`
Day_name.innerText=`${full_day}`



const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function updateClock() {
  const date = new Date();

  let h = date.getHours().toString().padStart(2, "0");
  let m = date.getMinutes().toString().padStart(2, "0");
  let s = date.getSeconds().toString().padStart(2, "0");

  hours.innerText = h + " :";
  minutes.innerText = m + " :";
  seconds.innerText = s;
}

updateClock();
setInterval(updateClock, 1000);

