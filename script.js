
let calcular = document.getElementById('calcular');




function imc(){

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');
    
    if(nome !== '' && altura !== '' && peso !== ''){
        
        
        const resultado_do_imc = (peso / (altura * altura)).toFixed(1)
        const resultado_do_imc2 = parseFloat(resultado_do_imc.replace(",", "."));

        let classificacao = " ";

        if (resultado_do_imc2 < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (resultado_do_imc2 < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (resultado_do_imc2 < 30){
            classificacao = 'levemente acima do peso.';
        }else if (resultado_do_imc2 < 35){
            classificacao = 'com obesidade grau I.';
        }else if (resultado_do_imc2 < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${resultado_do_imc2} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = 'Preencha todos os campos!'
    }

}

calcular.addEventListener(`click`, imc)