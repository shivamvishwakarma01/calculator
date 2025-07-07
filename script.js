let display = document.querySelector('.text');  
let buttons = document.querySelectorAll('.btn');
let string = "";
display.style.color = "black";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.textContent;  
        
        if (buttonText === '=') {
            string = eval(string);
            display.textContent = string; 
            display.style.fontSize = "24px";
            display.style.color = "green";

             buttons.forEach(btn => {
                if(btn.textContent !='AC'){
                btn.disabled = true;
                btn.style.opacity = "0.6"; }
            });
        }
        else if (buttonText === 'AC') {
            string = "";
            display.textContent = string;
            display.style.color = "black";
            display.style.fontSize = "18px";
            buttons.forEach(btn=>{
             btn.disabled = false;
             btn.style.opacity = "1"; 
            });


        }
        else if (buttonText === 'Del') {
            string = string.substring(0, string.length - 1);
            display.textContent = string;
        }
        else {
            string += buttonText;
            display.textContent = string;
            display.style.fontSize = "18px";
            display.style.color = "black";
        }
    });
})
