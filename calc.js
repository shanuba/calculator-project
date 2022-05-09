let answer =document.querySelector(".display");
let calc =document.querySelectorAll("button");
let val=document.querySelectorAll("btn-numbers");


calc.forEach(number => {
    number.addEventListener("click",example);
});
function example()
{
    let val = this.innerText;
   if (val==="c"){

answer.innerText ="";

return;
   }
   
  if(val==="=") {
    answer.innerText = eval(answer.innerText);

  }
   
  else{
      answer.innerText +=val;
      return;
  }
}


