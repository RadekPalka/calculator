const input= document.querySelector("input");
const signs= document.querySelectorAll(".sign");
const digits= document.querySelectorAll(".number");
const equal= document.querySelector("#equal");
const dot= document.querySelector("#dot");
const operations= document.querySelectorAll(".operation");
const minus= document.querySelector("#minus");
const ce= document.querySelector("#ce");
const refresh= document.querySelector("#refresh");
const del= document.querySelector("#delete");
const fraction= document.querySelector("#fraction");
const squared= document.querySelector("#squared");
const squareRoot= document.querySelector("#squareRoot");
const factorial= document.querySelector("#factorial");
const casio= document.querySelector("p");
const calc= document.querySelector("#calc");

let isDot= false;
input.value="0";
const numbers=[];
let operator;
let score;
let x;



digits.forEach(digit=>{digit.addEventListener("click", ()=>{
    if(!score){
    if (input.value==="0" ){
        input.value= digit.textContent;
    }
    else if(input.value.length<13){
        input.value+= digit.textContent;
    }}
    else if (score) {
        score=undefined;
        numbers.pop();
        input.value=digit.textContent;
    }
})});

dot.addEventListener("click", ()=>{
    if (isDot===false) {
        input.value+=".";
        isDot=true;
    }
})

function calculate(){
    isDot= false;
    if (!operator) operator=x.textContent;

    if (numbers.length<2) {numbers.push(parseFloat(input.value));
    input.value="0";}
    if (numbers.length===2 ){
    if (operator==="+")
        {
             score= numbers[0] + numbers[1];
        }
    else if (operator==="-")
        {
             score= numbers[0] - numbers[1];
        }
    else if (operator==="*")
        {
            score= numbers[0] * numbers[1];
        }
    else if (operator==="/" )
        {   
                           
              numbers[1]===0? score="Nie dziel cholero prze zero": score= numbers[0]/ numbers[1];
              
        }
    
    

    
    input.value=score;
    numbers[0]=score;
    
    
    operator=x.textContent;
    
}

}

operations.forEach(operation=>operation.addEventListener("click",()=>{
    x=operation;
    
    calculate();
}))

const negative=()=>{
    if (parseFloat(input.value)>0) input.value=`-${input.value}`;
    else if(parseFloat(input.value)<0) input.value= input.value.substr(1);
}

minus.addEventListener("click", negative);

equal.addEventListener("click", calculate);
ce.addEventListener("click",()=>{
    
    input.value="0";
    
})
refresh.addEventListener("click", ()=>{
    input.value="0";
    reload();
    
})
function reload(){
    operator= undefined;
        x= undefined;
        score= undefined;
    for (let i=0; i<=numbers.length; i++){
        numbers.pop();
        console.log(numbers);
    }
}

del.addEventListener("click", ()=>{
    if (input.value.length===1 ) input.value="0";
    else{
        input.value= input.value.substr(0, input.value.length-1);
    }
})
fraction.addEventListener("click", ()=>{
    if (input.value==="0") input.value="Nie dziel cholero przez zero";
    else input.value= 1/ parseFloat(input.value);

}) 
squared.addEventListener("click", ()=>{
    input.value= parseFloat(input.value)* parseFloat(input.value);
})
squareRoot.addEventListener("click", ()=>{
    input.value= Math.sqrt(parseFloat(input.value));
})
factorial.addEventListener("click",()=>{
    score=1;
    for (let i=1; i<= parseInt(input.value); i++ ){
        console.log(i);
        score *=i;
        console.log(`silnie ${i}`)

    }
    input.value=score;
})
