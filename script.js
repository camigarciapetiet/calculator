function addElement(e){
    evalExpression=false;
    expression += e;
    visor.textContent = expression;
}
function addNumber(e){
    if(evalExpression){
        expression="";
        evalExpression=false;
    }
    expression += e;
    visor.textContent = expression;
}

function delLastElement(){
    if(evalExpression){
        expression="";
        result=expression;
        visor.textContent=result;
    }else{
       expression = expression.slice(0, -1);
        visor.textContent = expression; 
    }
    
}

let expression = "";
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

n1.addEventListener("click", ()=> {addNumber("1")});
n2.addEventListener("click", ()=> {addNumber("2")});
n3.addEventListener("click", ()=> {addNumber("3")});
n4.addEventListener("click", ()=> {addNumber("4")});
n5.addEventListener("click", ()=> {addNumber("5")});
n6.addEventListener("click", ()=> {addNumber("6")});
n7.addEventListener("click", ()=> {addNumber("7")});
n8.addEventListener("click", ()=> {addNumber("8")});
n9.addEventListener("click", ()=> {addNumber("9")});
n0.addEventListener("click", ()=> {addNumber("0")});
sAdd.addEventListener("click", ()=> {addElement("+")});
sSub.addEventListener("click", ()=> {addElement("-")});
sMul.addEventListener("click", ()=> {addElement("*")});
sDiv.addEventListener("click", ()=> {addElement("/")});
dot.addEventListener("click", ()=> {addElement(".")});

const del= document.querySelector("#erase-btn");
del.addEventListener("click", ()=> {delLastElement();});

function add(a, b){
    return a+b;
}
function substract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function operate(a, op, b){
    a= Number(a);
    b= Number(b);
    switch (op){
        case "+": return add(a,b);
        case "-": return substract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
        default:
            alert("You are trying to calculate an invalid operation, check your equation");
    }
}

function evaluateExpression(){
    const tokens = expression.match(/(\d+(\.\d+)?|[+\-*/])/g);

    if(!tokens) return "";
    else if(tokens[0]=="-"){
        tokens.splice(0,1);
        tokens[0]="-"+tokens[0];
    }

    for(let i=0; i<tokens.length; i++){
        if(tokens[i]=="*"||tokens[i]=="/"){
            if(tokens[i]=="/" && tokens[i+1]=="0"){
                alert("You can't divide by 0");
                return 0;
            }
            const aux= operate(tokens[i-1], tokens[i], tokens[i+1]);
            tokens.splice(i-1, 3, aux);
            i--;
        }
    }
    for(let i=0; i<tokens.length; i++){
        if(tokens[i]=="+"||tokens[i]=="-"){
            const aux= operate(tokens[i-1], tokens[i], tokens[i+1]);
            tokens.splice(i-1, 3, aux);
            i--;
        }
    }

    return tokens[0];
}

const equal= document.querySelector("#equal");
let evalExpression=false;
equal.addEventListener("click", ()=> {
    if(expression!=""){
        let result= evaluateExpression();
        expression=result.toString();
        visor.textContent=result;
    }
    evalExpression=true;
});