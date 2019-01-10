
let today = new Date();
today.setHours(0,0,0,0);
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDay = today.getDate();
let selectYear =  currentYear;
let selectMonth = currentMonth;

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthAndYear = document.getElementById("monthAndYear");


showCalendar(currentMonth, currentYear);


function showCalendar(month, year) {
    let tbl = document.getElementById("calendar-body"); // body of the calendar
    // clearing all previous cells
    tbl.innerHTML = "";
    
    let daysInMonth = new Date(year, month,0).getDate();
    let firstDay = (new Date(year, month, 1)).getDay()-1;

    if(firstDay < 0){
        firstDay = 6;
    }
    monthAndYear.innerHTML = months[month] + " " + year;

    // creating all cells
    let i=0;
    let date = 1;
    let finished = true;
    while(finished){
        let row = document.createElement("div");
        row.setAttribute("class", "calendar__week");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                createCell(row);
            }
            else if (date > daysInMonth) {
                createCell(row);
                finished = false;
            }
            else {
                createCell(row,date);
                date++;
            }
    }
        i++;
        tbl.appendChild(row); // appending each row into calendar body.
    }
}


function createCell(row,date){
    let cell = document.createElement("div");
    let cellText = document.createTextNode((typeof date === 'undefined') ? "":date) ;
    cell.setAttribute("class", "calendar__day day");
    cell.appendChild(cellText);
    checkToday(cell,date);
    row.appendChild(cell);
}

function checkToday(cell,date){
    if (typeof date !== 'undefined'){
        day = new Date(selectYear,selectMonth,date);
        if( day.getTime() === today.getTime()) {
            cell.classList.add("bg-info");
        } // color today's date
    }
}

function next() {
    selectYear = (selectMonth === 11) ? selectYear + 1 : selectYear;
    selectMonth = (selectMonth + 1) % 12;
    monthAndYear.innerHTML = months[selectMonth] + " " + selectYear;
    showCalendar(selectMonth, selectYear);
}

function previous() {
    selectYear = (selectMonth === 0) ? selectYear - 1 : selectYear;
    selectMonth = (selectMonth === 0) ? 11 : selectMonth - 1;
    monthAndYear.innerHTML = months[selectMonth] + " " + selectYear;
    showCalendar(selectMonth, selectYear);
}

