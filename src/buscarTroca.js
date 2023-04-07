let viewTroca = document.querySelector('ul');
let input = document.getElementById('busca_nome');
let btnBuscar = document.querySelector('#buscar')

btnBuscar.addEventListener('click',(e)=>{
    e.preventDefault()
    let nome = input.value;
    busca(nome)
})
    
let busca = async (nome)=>{
    let result = await fetch(`http://localhost:3000/trocas/busca?busca=${nome}`,{
        method: 'GET',
        headers:{
            'Content-Type':'aplication/json'
        }
    });
    let json = await result.json();
    let buscaTrocas = json.trocaList;
    const viewTrocas = buscaTrocas.map((item, index)=>{
        let dataTroca = dataFormat(item.data_troca);
        let dataProximaTroca = dataFormat(item.proxima_troca);
        return `
        <li>
        <hr>
            <div class="cliente">
                <span>${item.nome_cliente}</span>
                <span>${dataTroca}</span>
                <button id="button">ver</button>
            </div>
            <div class="info">
                <h6>telefone:${item.telefone_cliente}</h6>
                <h6>oleo: ${item.nome_oleo}</h6>
                <h6>filtro: ${item.filtro}</h6>
                <h6>odometro: ${item.odometro}</h6>
                <h6>proxima troca: ${dataProximaTroca}</h6>
                <button onclick="apagar(${item.id})" id="apagar">excluir</button>
            </div>
        </li>
        `;
    });
    viewTroca.innerHTML = viewTrocas;

    let viewBtn = document.querySelectorAll('#button');
    let divCliente = document.querySelectorAll('.info');

    for(let i= 0; i< viewBtn.length;i++){
        viewBtn[i].addEventListener("click", ()=> {
            divCliente[i].classList.toggle("v")
        });
    };
}
