alert("Bem vindo ao meu portifólo!");
function troca_titulo() {
    document.getElementById("destaque").innerHTML = prompt ("Digite o nome:");
}
function apresentação() {
    document.getElementById("pbio").innerHTML = "Me chamo Gabriel Neres, ou só Neres. Tenho 18 anos e estou cursando análise e desenvolvimento de sistemas na Fatec de Carapicuíba. Gosto muito de programação, desenhar e animar, portanto, estudo estes três setores a anos com o objetivo de me capacitar para o mercado de trabalho.";

    document.getElementById("pbio2").innerHTML = "Minha maior inspiração para a área de tecnologia é e sempre será minha mãe. Além de ter me apresentado a área de tecnologia, foi a principal motivadora a seguir esta área.";
}

function troca_cor() {
    document.getElementById("tecnologias").style.color = "#ffffff";
    document.getElementById("tecnologias").style.backgroundColor = "#4f4f4f";
    document.getElementById("tabela").style.backgroundColor = "#2f2f2f";
    let tabelas = document.getElementsByClassName("tabelas");
    for(let i=0; i<tabelas.length;i++){
        tabelas[i].style.backgroundColor = "#000000";
    }
    let titulo = document.getElementsByClassName("titulo_troca_cor");

    for(let i=0; i<titulo.length; i++){
        titulo[i].style.color = "#FFFFFF"
        titulo[i].style.backgroundColor = "#000000";
        
    }
}

let clique = 0;

function contarClick(){
    clique = clique + 1;
    document.getElementById("cont").innerHTML = clique;
}