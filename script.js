var trocou = false;

function trocarCor(){
    if (!trocou){
        document.documentElement.style.setProperty('--cor_primaria', '#fce982');
    
        document.documentElement.style.setProperty('--cor_secundaria', '#000000');

        
    }
    else{
        document.documentElement.style.setProperty('--cor_primaria', '#000000');
    
        document.documentElement.style.setProperty('--cor_secundaria', '#fce982');
    }
    trocou = !trocou
}
