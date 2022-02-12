class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset=0;
    }

    btnPress(){

    }

}

//iniciando oobjeto

let calc = new Calculator;

//iniciando todos os botoes

let buttons = document.querySelectorAll('.btn');

//Adicionando evento de click em todos os botoes e o metodo btnPress

for(i=0; buttons.length>i; i++){
    buttons[i].addEventListener('CLick', calc.btnPress);
}