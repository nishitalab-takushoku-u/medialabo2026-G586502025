let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);

function greeting(){
let i=document.querySelector('input[name="left"]');
let name=i.value;
let a=Number(name);
let s=document.querySelector('input[name="right"]');
let name2=s.value;
let c=Number(name2);
let p=document.querySelector('span#answer');
let m=a+c;
p.textContent=m;
}