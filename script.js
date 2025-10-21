function addElement(e){
    visor.textContent=visor.textContent+e;
}

function add(a, b){

}
function substract(a, b){
    
}
function multiply(a, b){
    
}
function divide(a, b){
    
}
function operate(a, op, b){
    
}

const visor= document.querySelector("#visor");
const n1=document.querySelector("#n1");
const n2=document.querySelector("#n2");
const n3=document.querySelector("#n3");
const n4=document.querySelector("#n4");
const n5=document.querySelector("#n5");
const n6=document.querySelector("#n6");
const n7=document.querySelector("#n7");
const n8=document.querySelector("#n8");
const n9=document.querySelector("#n9");
const n0=document.querySelector("#zero-btn");
const sAdd=document.querySelector("#add");
const sSub=document.querySelector("#substract");
const sMul=document.querySelector("#multiply");
const sDiv=document.querySelector("#divide");
const dot=document.querySelector("#dot");

n1.addEventListener("click", ()=> {addElement("1")});
n2.addEventListener("click", ()=> {addElement("2")});
n3.addEventListener("click", ()=> {addElement("3")});
n4.addEventListener("click", ()=> {addElement("4")});
n5.addEventListener("click", ()=> {addElement("5")});
n6.addEventListener("click", ()=> {addElement("6")});
n7.addEventListener("click", ()=> {addElement("7")});
n8.addEventListener("click", ()=> {addElement("8")});
n9.addEventListener("click", ()=> {addElement("9")});
n0.addEventListener("click", ()=> {addElement("0")});
sAdd.addEventListener("click", ()=> {addElement("+")});
sSub.addEventListener("click", ()=> {addElement("-")});
sMul.addEventListener("click", ()=> {addElement("*")});
sDiv.addEventListener("click", ()=> {addElement("/")});
dot.addEventListener("click", ()=> {addElement(".")});
