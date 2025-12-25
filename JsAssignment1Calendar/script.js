const year=2026;
const months=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
const days=[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

const maincontainer=document.getElementById('container-1');

for(let i=0;i<12;i++){
    maincontainer.innerHTML+="<h2>"+months[i]+"</h2>";
}



