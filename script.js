const dateInfo = [
    {
        month:"January",
        day:31,
        hour:248,
        value:[1]
    },
    {
        month:"February",
        day:28,
        hour:224,
        value:[2]
    },
    {
        month:"March",
        day:31,
        hour:248,
        value:[3]
    },
    {
        month:"April",
        day:30,
        hour:250,
        value:[4]
    },
    {
        month:"May",
        day:31,
        hour:240,
        value:[5]
    },
    {
        month:"Jun",
        day:30,
        hour:248,
        value:[6]
    },
    {
        month:"July",
        day:31,
        hour:248,
        value:[7]
    },
    {
        month:"August",
        day:31,
        hour:240,
        value:[8]
    },
    {
        month:"September",
        day:30,
        hour:250,
        value:[9]
    },
    {
        month:"October",
        day:31,
        hour:250,
        value:[10]
    },
    {
        month:"November",
        day:30,
        hour:250,
        value:[11]
    },
    {
        month:"December",
        day:31,
        hour:250,
        value:[12]
    }, 
]
const numberOfDay = document.getElementById("days-section");
const headerSection = document.getElementById('header-section')

function addWeekendWindow(){
    
}

for(let i=1; i<32; i++){
    let div = document.createElement("div")
    div.innerText = i;
    div.classList = "box-class"
    numberOfDay.appendChild(div); 
}

for(let i=0; i<12; i++){
    let row = document.createElement("div");
    row.classList = "row-class";
    headerSection.appendChild(row);
    let firstDiv = document.createElement("div")
    let secondDiv = document.createElement("div")
    let thirdDiv = document.createElement("div")
    firstDiv.innerText = dateInfo[i].month;
    secondDiv.innerText = dateInfo[i].day;
    thirdDiv.innerText = dateInfo[i].hour;
    firstDiv.classList = "date-Hour-Style";
    secondDiv.classList = "date-Hour-Style";
    thirdDiv.classList = "date-Hour-Style";
    row.appendChild(firstDiv);
    row.appendChild(secondDiv);
    row.appendChild(thirdDiv);
    for(let n=1; n<32; n++){
        let div = document.createElement("div")
        div.innerText = 8;
        div.setAttribute('title',"weekend day's "+n)
        div.classList = "day-Style day-Style-color";
        row.appendChild(div);  
    }
}
