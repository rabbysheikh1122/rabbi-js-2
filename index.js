let interviewArr= [];
let rejectedArr = [];

const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');


const mainContainer = document.querySelector('#hello');
console.log(mainContainer);

interviewArr.push({name: 'kjj'},);
function calculation(){
    total.innerText =hello.children.length;
    interview.innerText = interviewArr.length;
    rejected.innerText = rejectedArr.length;
}

calculation();

const btnAllBtn = document.getElementById('btn-all');
const btnInterviewBtn = document.getElementById('btn-interview');
const btnRejectedBtn = document.getElementById('btn-rejected');

function toggleStyle(id){

    btnAllBtn.style.backgroundColor =""
    btnAllBtn.style.color="";

    btnInterviewBtn.style.backgroundColor= "";
    btnInterviewBtn.style.color = "";

    btnRejectedBtn.style.backgroundColor="";
    btnRejectedBtn.style.color = "";

    const newColorBtn = document.getElementById(id);
    newColorBtn.style.backgroundColor = "blue";
    newColorBtn.style.color = "white";
}





