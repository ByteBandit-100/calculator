const display = document.querySelector("#result");
const inputBtns = document.querySelectorAll("button");
const result = document.querySelector("#get-result");
const clearBtn = document.querySelector("#clear-btn");

for (let i = 0; i < inputBtns.length; i++) {
   inputBtns[i].addEventListener("click",()=>{
    display.value += inputBtns[i].value;
})
}

function getResult() {
    try{
    display.value =  eval(display.value);
    }catch(err){
        display.value = 'Error'
    }   
}

function clearTheInput() {
    display.value = '';
}
result.addEventListener("click", ()=>{
    getResult();
})
clearBtn.addEventListener('click',()=>{
    clearTheInput();
})