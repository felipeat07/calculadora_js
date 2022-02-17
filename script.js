class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset=0;
    }

    //limpa os valores do diplay
    clearValues(){
      calc.upperValue.textContent ='0';
      calc.resultValue.textContent = '0';
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

    //resolve a operação
    resolution(){

        //transforma a string em um array
        let upperValueArray = (this.upperValue.textContent).split(" ");

        //variável para armazenar o resultado
        let result = 0;

        for(let i=0; i <= upperValueArray.length; i++ ){
          let actualItem = upperValueArray[i];

          if(actualItem == '+'){
            result = parseFloat(upperValueArray[i-1]) + parseFloat(upperValueArray[i-1]);
          }

        }

        this.upperValue.textContent = result;
        this.resultValue.textContent = result;


      }



    btnPress(){
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        //verificando se tem só numeros
        var reg = new RegExp('^\\d+$');

        if(input == 'AC'){
          calc.clearValues();
        } 
        
        else if(input == '='){
          calc.resolution();
        }
        
        else {
              // checa os valores, para nao adicionar dois operadores mat
              if(calc.checkLastDigit(input, upperValue, reg)) {
                return true;
              }
 
              //adiciona espaço entre os operadores
              if(!reg.test(input)){
                input = ` ${input} `;
              }

        
            if(upperValue == '0'){
                calc.upperValue.textContent = input;
            } else{
                calc.upperValue.textContent += input;
            }

          
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

