//'use strict'
let item_sale = {}
let itens_sales = []
var id = 0

function addItem(){
const botaoAdicionar = document.querySelector("#add");
botaoAdicionar.addEventListener("click", function(e){
    e.preventDefault()
    });
   
    item_sale.id = 0
    item_sale.item = document.getElementById("item").value
    item_sale.quant = document.getElementById("quant").value
    item_sale.valor = document.getElementById("valor").value
    return item_sale
}
addItem(console.log(item_sale))


let venda = 0;

    const inicializarItens = () =>{
    var containerItem = document.getElementById('itens_sales');
    itens_sales.map((val) =>{
    val.total = val.quant * val.valor
    containerItem.innerHTML +=`
    <fieldset>
    <div id="itens_list">
    <p>Id: ${val.id}
    <p>Descrição: ${val.item}</p>
    <p>Valor: R$${val.valor}</p>
    <p>Quantidade: ${val.quant}</p>
    <p>Total Item: R$${val.total} </p>
    </div>
    </fieldset>`
})


}

if(itens_sales == ""){
   messages = document.getElementById('messages')
   messages.innerHTML = `Sem Itens no momento!!`
}
else{
    inicializarItens();
}
     

const headerItens = () => {
const containerHeaderVendidos = document.getElementById('header_vendidos')
itens_sales.map((val) => {
    if (val.quant > 0)
    containerHeaderVendidos.innerHTML =`
    <fieldset style="color:blue">
    <legend>Itens da compra</legend>
    <b style="padding:12px;margin:12px">
    Descrição |
    Quantidade |
    valor |
    Total
    </b>
    </fieldset>`
})
}
headerItens()

const itensVendido = () =>{
    var containerVendido = document.getElementById('itens_vendido');
    itens_sales.map((val) => {
        if(val.quant > 0){
            containerVendido.innerHTML =`
            <fieldset>
        <div>
        ${val.item} |
        ${val.quant} |
        R$${val.valor} |
        R$${val.total}
        </div>
        </fieldset>
        `}
    })
}
itensVendido()
    
var totalVenda = 0;
const somaTotal = () =>{
    itens_sales.map ((val) =>{
        totalVenda +=  val.quant * val.valor
    })
}
somaTotal()

containerTotalVenda = document.getElementById("total_venda")
containerTotalVenda.innerHTML = `
<div>Total da Venda: R$`+totalVenda+`</div>
`
containerVenda = document.getElementById("container_venda")
containerVenda.innerHTML = `
<div id="total_venda">Venda número: ${venda++}</div>
`
