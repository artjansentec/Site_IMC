//$('body').hide(1);
$('#texto').fadeOut();
$('header').fadeOut(1);
$('section').fadeOut(1);
$('footer').fadeOut(1);

$('header').fadeIn(2000);
$('section').fadeIn(3000);
$('footer').fadeIn(5000);



setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

function clear(){ 
    console.log("teste")
    $("#nome").clear();
    $("#altura").clear();
    $("#peso").clear();

}

function imc(){
   let nome = document.getElementById("nome").value;
   let altura = document.getElementById("altura").value;
   let peso = document.getElementById("peso").value;
   
   let valor = (peso / (altura * altura)).toFixed(1);
   let peso1 = ((altura * altura)*18.5).toFixed(1);
   let peso2 = ((altura * altura)* 25).toFixed(1);
   
   /*
   console.log(nome);
   console.log(altura);
   console.log(peso);
   console.log(valor);
    */

   let final;

   if(valor < 18.5){
     final = "Isso significa que voce está embaixo do peso";
   }else if(valor >= 18.5 && valor <= 24.9)
   {
     final = "Que corresponde a um Peso Normal";
   }else if(valor >= 25 && valor <= 29.9)
   {
     final = "Que corresponde a Sobrepeso";
   }else if(valor >= 30 && valor <= 34.9)
   {
     final = "Que corresponde a Obesidade Grau I";
   }else if(valor >= 35 && valor <= 39.9)
   {
     final = "Que corresponde a Obesidade Grau II";
   }else if(valor >= 40)
   {
     final = "Que corresponde a Obesidade Grau III";
   }

   var texto = "Senhor "+ nome +", ao calcular seu peso de: "+ peso + "Kg, e a altura de: "+ altura + "m, chegamos a conclusão de que seu IMC é de: "+ valor + "." + final + "!" +" Procure manter o seu peso entre "+peso1+"kg e "+peso2+"kg";

   $('#texto').fadeIn(2000);

   document.getElementById("texto").innerHTML = texto;
   console.log(texto)
   
   
}


/*
window.alert("Eai, primeira vez aqui?");
window.confirm("Certeza que quer continuar");
*/