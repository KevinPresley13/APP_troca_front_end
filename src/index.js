let viewBtn = document.querySelectorAll('#button');
let divCliente = document.querySelectorAll('.info');
const dataFormat = (data)=>{
    let newData = data;
    return newData.split('-').reverse().join('/');
};
//mostra infotemaçoes da troca
for(let i= 0; i< viewBtn.length;i++){
    viewBtn[i].addEventListener("click", ()=> {
        divCliente[i].classList.toggle("v")
    });
    console.log(viewBtn[i])
};
const apagar = async (id)=>{
    await fetch(`http://localhost:3000/troca/${id}`,{
        method: 'DELETE'
    });
    window.location.reload();
};