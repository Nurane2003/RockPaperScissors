let intro=document.querySelector('.intro')
let game=document.querySelector('.game')
let playBtn=document.querySelector('.play-btn')
let canselBtn=document.querySelector('.cansel-btn')
let humanScore=document.querySelector('#humanScore')
let humanHand=document.querySelector('#humanHand')
let computerScore=document.querySelector('#computerScore')
let computerHand=document.querySelector('#computerHand')
let playerWin=document.querySelector('#playerWin')
let playerLose=document.querySelector('#playerLose')
let winResult=document.querySelector('#winResult')
let loseResult=document.querySelector('#loseResult')
let rockBtn=document.querySelector('.rockBtn')
let paperBtn=document.querySelector('.paperBtn')
let scisBtn=document.querySelector('.scisBtn')


let myScore=0;
let compScore=0;
let winScore=0;
let loseScore=0;



game.style.display="none"

playBtn.addEventListener('click',function(){
   intro.style.display="none"
   game.style.display="block"
})
  
canselBtn.addEventListener('click',function(){
     window.close()
})

function randomHandSelector(){
   let arr=["r","p","s"];
   let randomHand=Math.floor(Math.random() * arr.length);
   computerHand.setAttribute('src',`./images/${arr[randomHand]}.png`);
   return arr[randomHand];
}
rockBtn.addEventListener('click',function(){
   humanHand.setAttribute('src',`./images/r.png`);
   randomHandSelector();
   result("r");
   console.log(rockBtn);
})
paperBtn.addEventListener('click',function(){
   humanHand.setAttribute('src',`./images/p.png`)
   randomHandSelector();
   result("p");
})
scisBtn.addEventListener('click',function(){
   humanHand.setAttribute('src', `./images/s.png`);
   randomHandSelector();
   result("s");
})
function result(humanChoice){
   let compChoice=randomHandSelector();
   if(
      (humanChoice==="r"&& compChoice==="s")||
      (humanChoice==="p"&& compChoice==="r")||
      (humanChoice==="s"&& compChoice==="p")
   ){
      myScore++;
      if(myScore===3){
      playerWin.style.display="block"
      winResult.innerHTML=winScore+=1;
      document.querySelector(".btn-group").style.display="none";
      setTimeout(()=>{
       playerWin.style.display="none";
       humanScore.innerHTML=0;
       computerScore.innerHTML=0;
       myScore=0;
       compScore=0;
       humanHand.setAttribute("src",`./images/r.png`);
       computerHand.setAttribute("src",`./images/r.png`);
       document.querySelector(".btn-group").style.display="flex";
      },1500)
   }
  }
  else if(
   (compChoice==="r"&& humanChoice =="s")||
   (compChoice==="p"&& humanChoice==="r")||
   (compChoice==="s"&& humanChoice==="p")

  ){
   compScore++;
   if(compScore===3){
      playerLose.style.display="block";
      loseResult.innerHTML=loseScore+=1;
      document.querySelector(".btn-group").style.display="none";
      setTimeout(()=>{
         playerLose.style.display="none";
         humanScore.innerHTML=0;
         computerScore.innerHTML=0;
         myScore=0;
         compScore=0;
         computerHand.setAttribute("src",`./images/r.png`);
         humanHand.setAttribute("src",`./images/r.png`);
         document.querySelector(".btn-group").style.display="flex";
        },1500)
   }
  }

humanScore.textContent=myScore;
computerScore.textContent=compScore;

  }



