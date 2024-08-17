//==========================Section_2_Slider=========================================

let products=document.getElementsByClassName("sliderItem");

let count=-1;

forwardSlide.addEventListener("click",()=>{
    count++;
    if(count==products.length-3){
        forwardSlide.style.display="none";        
    }
    products[count].style.display="none";
})

backwardSlide.addEventListener("click",()=>{
    forwardSlide.style.display="block";
    products[count].style.display="block";
    count--;
});
//========================================Icons________Questins___Answere====================
iconOne.addEventListener("click",()=>{
  if(ansOne.style.display == "block"){
    ansOne.style.display="none";
  }
  else{
    ansOne.style.display="block";
  }
})
iconTwo.addEventListener("click",()=>{
  if(ansTwo.style.display=="block"){
    ansTwo.style.display="none";
  }
  else{
    ansTwo.style.display="block";
  }
})
iconThree.addEventListener("click",()=>{
  if(ansThree.style.display == "block"){
    ansThree.style.display="none";
  }
  else{
    ansThree.style.display="block";
  }
})
iconFour.addEventListener("click",()=>{
  if(ansFour.style.display == "block"){
    ansFour.style.display="none";
  }
  else{
    ansFour.style.display="block";
  }
})