/*let name = prompt("¿Quien eres? ");
console.log("Hola " + name + "!");
alert("Hola " + name + "!");
document.write("Hola " + name + "!");*/
const ask = () => {
  //  alert('Holaaa!');
    //Leer pregunta
    const answerInput = document.getElementById('answer');
    const questionInput = document.getElementById('question');
    if (questionInput.value !==""){
     //recibir respuesta al preguntar a la bola
    let answer =  MagicBall();
      //Imprimir resultado
    answerInput.value = answer;
    } else {
        answerInput.value = "Pregunta algo!";
    }


};
//Función bola mágica
const MagicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall='';
    switch (randomNumber) {
        case 1:
        eightBall='It is certain';
        break;
        case 2:
        eightBall='It is decidedly so';
        break;
         case 3:
        eightBall='Reply hazy try again';
        break;
        case 4:
        eightBall='Cannot predict now';
        break;
        case 5:
        eightBall= 'Do not count on it';
        break;
        case 6:
        eightBall = 'My sources say no';
        break;
        case 7:
        eightBall = 'Outlook not so good';
        break;
        case 8:
        eightBall = 'Signs point to yes';
        break;
      }
      return eightBall;
};
