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

      sum(n1,n2){
        return parseFloat(n1) + parseFloat(n2);      
      }

      subtratiction(n1,n2){
        return parseFloat(n1) - parseFloat(n2);      
      }

      multiplication(n1,n2){
        return parseFloat(n1) * parseFloat(n2);      
      }

      division(n1,n2){
        return parseFloat(n1) / parseFloat(n2);      
      }


      //atualiza valores
      refreshValues(total){
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
      }

    //resolve a operação
    resolution(){

        //transforma a string em um array
        let upperValueArray = (this.upperValue.textContent).split(" ");

        //variável para armazenar o resultado
        let result = 0;

        for(let i=0; i <= upperValueArray.length; i++ ){
          let actualItem = upperValueArray[i];
          let operation = 0;

          if(actualItem == 'x'){
            result = calc.multiplication(upperValueArray[i-1],upperValueArray[i+1]);
            operation = 1;
          }

          else if(actualItem == '/'){
            result = calc.division(upperValueArray[i-1],upperValueArray[i+1]);
            operation = 1;
          }

          else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')){

            if(actualItem == '+'){
              result = calc.sum(upperValueArray[i-1],upperValueArray[i+1]);
              operation = 1;
            }
  
            else if(actualItem == '-'){
              result = calc.subtratiction(upperValueArray[i-1],upperValueArray[i+1]);
              operation = 1;
            }

          }

          //atualiza array para proxima operação
          if(operation){
            //indice anterior no resultado da operação
            upperValueArray[i-1]=result;
            //remove os itens já utilizados na operação
            upperValueArray.splice(i,2);
            //atualiza o valor do indice
            i=0;
          }

        }

        if(result){
          calc.reset = 1;
        }

        //atualizar os totais
        calc.refreshValues(result);

      }



    btnPress(){
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        //verificando se tem só numeros
        var reg = new RegExp('^\\d+$');

        //reseta o display
        if(calc.reset && reg.test(input)){
          upperValue = '0';
        }
        
        //limpa a prop reset
        calc.reset = 0;

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
              if(reg.test(input)){
                calc.upperValue.textContent = input;
              }
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

