const h1=document.querySelector('h1'); 
const fristNumber=document.querySelector('#frist-number');
const secondNumber=document.querySelector('#second-number');
const btn=document.querySelector('#calc');
const result=document.querySelector('#result');

function btnOnClick(){
    const calculous= parseInt(fristNumber.value) + parseInt(secondNumber.value);
    result.innerText="the result is : "+ calculous;
}
