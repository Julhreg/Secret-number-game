let drawnNumbers = []; //lista vazia 
let attempsLimit = 10;
let secretNumber = generateRandomNumber(); // função vazia 
let attempsNumber = 1;

// pegar textos tipo h1, p, h2, sem precisar criar um codigo grande todas as vezes 
function displayText(tag, text){
    let element = document.querySelector(tag);
    element.innerHTML = text;
}
// exibir a primeira mensagem todas as vezes que for reiniciado
function displayInitialMessage() {
    displayText('h1', 'Secret number game');
    displayText('p', 'choose a number between 1 and 10');
}

// função para checar as tentativas 
function checkAttempt() {
    let guess = document.querySelector('input').value; //pegar o valor

    if (guess == secretNumber){
        displayText('h1', 'got it right'); // voce acertou 
        // se o numero de tentativas for maior que 1
        let wordTry = attempsNumber > 1 ? 'attempts' : 'try';
        let attemptsMessage = `you discovered the secret number with ${attempsNumber} ${wordTry}`;
        displayText('p', attemptsMessage);
        //pegr um id especifico para nao confundir os buttons 
        document.getElementById('restart').removeAttribute('disabled'); //remover atributo
    } else {
        if (guess > secretNumber) {
            displayText('p', 'the secret number is smaller than the chosen one');
        } else {
            displayText('p', 'the secret number is greater than the chosen one');
        }

        //tentativas + numero de vezes
        attempsNumber ++;
        clearField();
    }
}

// gerar um numero aleatorio entre 1 e 10
function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * attempsLimit +1 );
    let elementQuanty = drawnNumbers.length;

    if (elementQuanty == attempsLimit){
        drawnNumbers = [];
    }



    //se o numero sorteado estiver incluso na lista
    if (drawnNumbers.includes(chosenNumber)){
        return generateRandomNumber();
    } else {
        //inserir no final da lista
        drawnNumbers.push(chosenNumber);
        return chosenNumber;
    }
}

//limpar o campo do numero para inserir um novo sem precisar apagar manualmente
function clearField() {
    guess = document.querySelector('input');
    guess.value = '';
}

// toda vez que o jogo for reiniciado as coisas resetam como se fosse a primeira vez
function restartGame() {
    secretNumber = generateRandomNumber();
    clearField();
    attempsNumber = 1;
    displayInitialMessage();
    document.getElementById('restart').setAttribute('disabled', true); //adicionar um atributo
}

displayInitialMessage();

/*array = [listas], o primeiro elemento tem o indice 0, length para ver a quantidade de elementos da lista 
para pegar um elemento da lista usamos seu nome e a posição desejada = lista[0]
[lista.length -1] = ultimo elemento*/
