
let password = '';
let lastSymbol = password.toString().slice(-1);

function cancel(){
    password = password.slice(0, -1);
    let lastSymbol = password.toString().slice(-1);
    return lastSymbol;
}

function clear(){
    password='';
    return password;
}

function enter(){
    document.getElementById(canc) = alert(123);
}
canc.on
// let finish = false;


// function clearAll() {
//     password = '';
//     finish = false;
//     out.textContent = 0;
//     alert(password);
// }
// document.querySelector('.clear').onclick = clearAll;

// // let password = password.slice(0, -1);
// document.querySelector('.buttons').onclick = (event) => {
//     if(!event.target.classList.contains('btn')) return;
// }
