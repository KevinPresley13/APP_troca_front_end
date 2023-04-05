let changeBtn = document.querySelectorAll('#button')
let divCliente = document.querySelectorAll('.info')

for(let i= 0; i< changeBtn.length;i++){
    changeBtn[i].addEventListener("click", ()=> {
        divCliente[i].classList.toggle("v")
    });
}