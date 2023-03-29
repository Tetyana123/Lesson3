const age = prompt("What is your age?:");
      if(age >= 18) {
        alert(`You are welcome! You can do your order`);
    } else {
        alert(`Sorry, you can not do your order`);
    }


var now = new Date();
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6
    
    if(dayOfWeek == 5) {
        alert("We call you in one day");
    } else if(dayOfWeek == 0){
        alert("We call you tomorrow");
    } else {
        alert("Our operator call you as soon as possible");  
    }


    
var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
    ( select.value === 'blue' ) ? update('blue','yellow') : update('yellow','blue');
    }