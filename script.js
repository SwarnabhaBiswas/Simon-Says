let h2=document.querySelector('h2');
let allBtn=document.querySelectorAll('.btn');

let gameSeq=[];
let userSeq=[];

let colors=['red','yellow','green','blue'];

let level=0;
let start=false;

document.addEventListener('keypress',()=>{
    if(start===false){
        levelUp();
    }
})

function flash(idx){
    idx.classList.add('flash');
    setTimeout(function(){
        idx.classList.remove('flash');
    },350)
}
function userFlash(idx){
    idx.classList.add('flash');
    setTimeout(function(){
        idx.classList.remove('flash');
    },350)
}

function levelUp(){
    level++;
    userSeq=[];
    start=false;
    h2.innerHTML=`You are on ${level}`;

    let randNum=Math.floor(Math.random()*3);
    let randCol=colors[randNum];
    let randBtn= document.querySelector(`.${randCol}`);
    console.log(randNum);
    console.log(randCol);

    gameSeq.push(randCol);
    console.log(gameSeq);

    flash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,800);
        }
    }
    else{
        console.log("galat");
        h2.innerHTML=`<b>Game Over</b>
        <u>Your Score is ${level}</u>
        Press a key again to restart`;
        let body=document.querySelector('body');
        body.classList.add('bodyRed');
        setTimeout(function(){
            body.classList.remove('bodyRed');
        },450);
        reset();
    }
}

function userPress(){
    let btn=this;
   userFlash(btn);  
   
   let userCol=btn.getAttribute('id');
   userSeq.push(userCol);

   checkAns(userSeq.length-1);
}

for(btn of allBtn){
    btn.addEventListener("click",userPress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}