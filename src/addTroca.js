let nome = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let nome_oleo = document.querySelector('#nome_oleo'); 
    let nome_filtro =document.querySelector('#nome_filtro');
    let odometro = document.querySelector('#odometro');
    let data_troca =document.querySelector('#data_troca');
    let proxima_troca = document.querySelector('#proxima_troca');
let btnSubmit = document.querySelector('form');
let btnCancelar = document.querySelector('#cancelar');
btnCancelar.addEventListener('click', ()=>{
    clearInput();
});

const clearInput = ()=>{
    nome.value = '',
    phone.value = '',
    nome_oleo.value = '',
    nome_filtro.value = '',
    odometro.value = '',
    data_troca.value = '',
    proxima_troca.value = ''
};

const addTroca = async ()=>{
    let vNome = nome.value;
    let vPhone = phone.value
    let vNome_oleo = nome_oleo.value
    let vNome_filtro = nome_filtro.value
    let vOdometro = odometro.value
    let vData_troca = data_troca.value
    let vProxima_troca = proxima_troca.value
    await fetch(`http://localhost:3000/troca`,{
        method:"POST",
        headers: {
            'Content-Type':'application/json'
          },
        body: JSON.stringify({
            nome_cliente: vNome,
            telefone_cliente: vPhone,
            nome_oleo: vNome_oleo,
            filtro: vNome_filtro,
            odometro: vOdometro,
            data_troca: vData_troca,
            proxima_troca: vProxima_troca
        }) 
    });
    window.location.replace('http://127.0.0.1:5500/src/index.html')
};
btnSubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTroca()
});