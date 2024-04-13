let text = "Network Administrator...";
let speed = 100;
let elem = document.getElementById('cycle');

elem.style.fontSize = "30px";

function typeWriter() {
  if (elem.textContent.length > 0) {
    elem.textContent = elem.textContent.slice(0, -1);
    setTimeout(typeWriter, speed);
  } else {
    typeMessage(text, 0);
  }
}

function typeMessage(message, index) {
  if (index < message.length) {
    elem.textContent += message.charAt(index);
    index++;
    setTimeout(function() {
      typeMessage(message, index);
    }, speed);
  }
}

setTimeout(function(){
  typeWriter();
}, 3000);





