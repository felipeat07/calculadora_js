class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset=0;
    }

    checkLastDigit(input, upperValue, reg) {

        if((
          !reg.test(input) &&
          !reg.test(upperValue.substr(upperValue.length - 1))
        )) {
          return true;
        } else {
          return false;
        }
      }


    btnPress(){
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        //verificando se tem só numeros
        var reg = new RegExp('^\\d+$');

        if(calc.checkLastDigit(input, upperValue, reg)) {
            return false;
          }
    
        if(upperValue == '0'){
            calc.upperValue.textContent = input;
        } else{
            calc.upperValue.textContent += input;
        }
    }

}

//iniciando oobjeto

let calc = new Calculator;

//iniciando todos os botoes

let buttons = document.querySelectorAll('.btn');

//Adicionando evento de click em todos os botoes e o metodo btnPress

for(let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener('click', calc.btnPress);
}

