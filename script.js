let pontos = 0;
let valorClique = 1;
let upgrades = 0;
let custoUpgrade = 10;


const pontosTela = document.getElementById("pontos");
const valorCliqueTela = document.getElementById("valorClique");
const upgradesTela = document.getElementById("upgrades");
const custoTela = document.getElementById("custo");
const mensagem = document.getElementById("mensagem");


function clicar() {

    if (pontos >= 500) {
        return; 
    }

    
    pontos += valorClique;
    atualizarTela();

    
    if (pontos >= 500) {
        pontos = 500; 
        atualizarTela(); 

        
        mensagem.innerText = "VOCÊ CONSTRUIU A MAIOR PIZZARIA DA CIDADE!";
        
        
        lancarConfetes();

        
        setTimeout(reiniciarJogo, 5000);
    }
}


document.getElementById("btnClique").addEventListener("click", clicar);
document.getElementById("pizza").addEventListener("click", clicar);

document.getElementById("btnUpgrade").addEventListener("click", function(){
    
    if (pontos >= 500) return;

    
    if (pontos >= custoUpgrade) {
        upgrades++;
        valorClique++;
        
        
        custoUpgrade = Math.floor(custoUpgrade * 1.5);

        atualizarTela();
    } else {
        alert("Você precisa produzir mais pizzas no total para liberar esta melhoria!");
    }
});




function atualizarTela() {
    pontosTela.innerText = pontos;
    valorCliqueTela.innerText = valorClique;
    upgradesTela.innerText = upgrades;
    custoTela.innerText = custoUpgrade;

    
    let porcentagem = (pontos / 500) * 100;
    document.getElementById("progresso").style.width = porcentagem + "%";
}


function lancarConfetes() {
    confetti({ particleCount: 150, spread: 80, origin: { x: 0.2, y: 0.6 } });
    confetti({ particleCount: 150, spread: 80, origin: { x: 0.8, y: 0.6 } });
}


function reiniciarJogo() {
    pontos = 0;
    valorClique = 1;
    upgrades = 0;
    custoUpgrade = 10;
    
    mensagem.innerText = ""; 
    atualizarTela(); 
}