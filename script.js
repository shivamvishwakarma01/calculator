const k=document.body.querySelector('.text');
const l=document.body.querySelectorAll('.q');
const c= document.getElementById('opec');
const p=document.getElementsByClassName('btnp');
console.log(p);

function dig(){
    l.forEach((val)=>{
    val.onclick=()=>{
     k.innerHTML= k.innerHTML+val.innerHTML;
     num=k.innerHTML;
     clear();
     sum();
     return;
    }
    
})}
const clear=()=>{
    c.onclick=()=>{
        k.innerHTML=" ";
    }
    return;
}
const sum=()=>{
    p.onclick=()=>{
        k.innerHTML= dig()+dig();

    }
    return ;
}
function calculateAllOperations(a, b) {
  // Sum
  const sum = a + b;
  
  // Difference (absolute value to always get positive difference)
  const difference = Math.abs(a - b);
  
  // Multiplication
  const product = a * b;
  
  // Division (with check for division by zero)
  let quotient;
  if (b !== 0) {
    quotient = a / b;
  } else {
    quotient = "Cannot divide by zero";
  }
  
  // Return all results as an object
  return {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient
  };
}
calculateAllOperations(dig(),dig());