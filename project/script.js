function num(newNum) {
    let element = document.getElementById('block-1');
    let link = document.createElement('a');
    link.innerHTML = newNum;
    element.appendChild(link);
}

function enter() {
    let element = document.getElementById('block-1');
    let link = document.createElement('a');
    let sum = document.getElementById('block-1').innerText;
    alert(sum);
    element.appendChild(link);
}

function remove() {
    let element = document.getElementById('block-1');
    element.removeChild(element.lastChild);
}

function removeAll() 
{
    let element = document.getElementById("block-1");
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
  }
