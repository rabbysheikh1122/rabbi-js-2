let interviewArr= [];
let rejectedArr = [];

const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');


const mainContainer = document.querySelector('#hello');
console.log(mainContainer);

interviewArr.push();
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

mainContainer.addEventListener('click' , function(event){
    if(event.target.classList.contains('section-btn-1')){
        const parentNode = event.target.parentNode.parentNode;
    const sectionHead = parentNode.querySelector('#section-head').innerText;
    const sectionText2 = parentNode.querySelector('#section-text-2').innerText;
    const sectionText3 = parentNode.querySelector('#section-text-3').innerText;
    const sectionText4 = parentNode.querySelector('#section-text-4').innerText;

    const sectionInfo ={
        sectionHead,
        sectionText2,
        sectionText3,
        sectionText4
    }
    const sectionExist = interviewArr.find(item=> item.section-head==sectionInfo.section-head);
    if(!sectionExist){
        interviewArr.push(sectionInfo);
    }
    console.log(interviewArr)
})
renderFilterSection();
}

    

const filterSection=document.getElementById('filter-section');
 
function renderFilterSection(){
    filterSection.innerHTML="";
    
    for(let interview of interviewArr){
        console.log(interview);
        let div =document.createElement('div');
        div.innerHTML= `
         <div id="sectoin-1">
            <div id="big-card"> 

            <div id="detalse">
            <h2 id="section-head">Mobile First Corp</h2>
            <h5 id="section-text-2">React Native Devoloper</h5>
            <h5 id="section-text-3">Remot . Full-time . $130,000 - $175,000</h5>
            <p id="section-text-4">Build cross-platform mobile application using React Native Work on products used by millions of users worldwoid</p>
            <button id="section-btn-1">INTERVIEW</button>
            <button id="section-btn-2">REJECTED</button>
            </div>

             <div id="delete">
               <i class="fa-regular fa-trash-can"></i>
            </div>
            </div>
        </div>

        `
    }
}
