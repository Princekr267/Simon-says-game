let gameSeq=[];
let userSeq=[];
let btns=["red", "blue", "green", "yellow"];
let started=false;
let level=0;
let highScore=0;
let h2=document.querySelector("h2");
let background="light";
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        
        levelUp();
    };
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
};
let score=document.querySelector(".score");
let body=document.querySelector("body");
// h2.append(score);
// let score=h2.innerHTML=`High Score = <b>${highScore}</b>`;
// h2.insertAdjacentElement("afterend", "score");
function checkAns(idx){
    // console.log("curr level: ", level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        
        h2.insertAdjacentElement("afterend", score);
        h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br> Press any key to start`;
        
        body.style.backgroundColor="red";
        setTimeout(function (){
            if(background==="light"){
                body.style.backgroundColor="white";
            } else{
                body.style.backgroundColor="#25232A";
            }
        }, 100);
        
        reset();
    }
}
function levelUp(){
    userSeq=[];
    level++;
    if(highScore<level){
            highScore=level;
        }
    score.innerHTML=`High Score = <b>${highScore}</b>`;
    h2.insertAdjacentElement("afterend", score);
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randColor=btns[randomIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

};
function btnPress(){
  //  console.log(this);
    let btn=this;
    btnFlash(btn);
    userSeq.push(btn.getAttribute("id"));
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}


let mode=document.querySelector("#mode");


mode.addEventListener("click", function(){
    if(background==="light"){
        body.style.backgroundColor="#25232A";
        body.style.color="white";
        mode.setAttribute("id", "white");
        mode.innerText="Light";
        background="dark";
    } else{
        body.style.backgroundColor="#ffffffff";
        body.style.color="black";
        mode.setAttribute("id", "white");
        mode.innerText="Dark";
        background="light";
    }
});