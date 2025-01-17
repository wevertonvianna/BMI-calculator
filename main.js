const namerimput =document.querySelector("#name");
const alturaimput =document.querySelector("#Altura");
const pesoimput =document.querySelector("#Peso");
const buttonimput =document.querySelector("#caucular");
const resultadoimput =document.querySelector(".result");
const erro =document.querySelector(".error");



function imc(){
  const namervalue = namerimput.value
  const alturarvalue = alturaimput.value
  const pesorvalue = pesoimput.value
  const resultvalue = resultadoimput

  if(namervalue === "" || pesorvalue ==="" || alturarvalue===""){
    erro.textContent ='Prencha todos os campos'
    erro.classList = "error"
     setTimeout(()=>{
       erro.textContent ='';
       erro.classList = "";
     },4000);
  }else{const valueimc =(pesorvalue/(alturarvalue*alturarvalue)).toFixed(2);

    let classified = '';

    if(valueimc < 18.5){
      classified ="abaixo do peso";}else{
      if(valueimc <25){
        classified ="com o peso ideal !!!";}else{
        if(valueimc <30){
          classified ="levemente acima do peso ,Parabéns!!!";}else{
          if(valueimc <30){
            classified ="com obesidade grau I !!!";}else{
             if(valueimc <30){
              classified =" com obesidade grau II !!!";}else{
              classified =" com obesidade grau III .cuidado !!!";
              }}}}}
  
    resultvalue.textContent =`${namervalue} seu IMC ${valueimc} você está ${classified}`;



    


}}

buttonimput.addEventListener("click",imc);

