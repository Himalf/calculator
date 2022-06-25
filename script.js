let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='×'){
            buttonText ='*';
            screenValue += buttonText
            screen.value = screenValue;
        }
      else  if(buttonText=='÷'){
            buttonText ='/';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else  if(buttonText=='√'){
            buttonText = '^';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else  if(buttonText=='×2'){
            buttonText = '*2';
            screenValue += buttonText
            screen.value = screenValue;
        }
        
        else if(buttonText =='='){
            // screenValue='=';
         screen.value= eval(screenValue);
        }
        else if(buttonText=='C'){
          screenValue="";
            screen.value = screenValue;
        }
        else{
            screenValue+= buttonText;
            screen.value = screenValue;
        }
    })
}