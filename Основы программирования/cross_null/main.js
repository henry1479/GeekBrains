

/*
* объект игры,
* содержит свойство с массивом выигрышных комбинаций
* метод начала игры,
* метод проверки состояния игры на предмет победы или поражения
*/

const game = {

    win: [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ],



   start(){
    field.render();
    players.renderMove();
   },
   /*
   метод принимает ходы игроков в виде массива и проводит сравнение этих массивов с выигрышными комбинациями,
   в случае совпадения окрашивает комбинацию в зеленный цвет и через секунду выводит сообщение об окончании игры и победителе
   */

   checkWin(moves) {
       for(let i = 0; i < game.win.length-1; i++ ){
           if(game.win[i].every(item => moves.indexOf(item) !== -1)){
               field.renderWin(game.win[i])
                const timerID = setTimeout(field.cleanField, 1000);  
                
            }
            // елси ничья тоже выводится сообщение
            if (moves.length > 4){ 
                field.getMessageDraw();

            }
        }
   },

}
/*
 объект с игроками
 содержит свойства с пустыми массивами для ходов каждого,
 для знаков каждого,
 флаг для очередности ходов.
*/

const players = {
    playerOneMoves: [],
    playerTwoMoves: [],
    playerOneSign: 'x',
    playerTwoSign: 'o',

    player: 'player-2', // получается флаг изначально на того кто не ходит 

    // метод в зависимости от флага наполняет инпуты поля содержимым и массивы ходами 
    doMove(event) {
        let square = event.target;
        if(players.player === 'player-2') {
            players.attrSet(square,players.playerOneSign);
            players.storeMove(square,players.playerOneMoves);
            players.player = 'player-1';
            game.checkWin(players.playerOneMoves);

            
        } else {
            players.attrSet(square,players.playerTwoSign);
            players.storeMove(square,players.playerTwoMoves);
            players.player = 'player-2';
            game.checkWin(players.playerTwoMoves);
        }
        

        
        
    },
    // проставляет знак игрока в инпут и делает его неизменяемым
    attrSet(square,sign){
        square.setAttribute('value',sign);
        square.setAttribute('disabled', '');
    },

    // заполняет массив игрока ходами
    storeMove (square,playerArr) {
        let position = +square.getAttribute('data-position');
        playerArr.push(position);
        return playerArr
    },
 
    // отрисовывает ход на поле
    renderMove() {
        squares = field.getCells();
        for(square of squares){
            square.addEventListener('click', this.doMove);
        }
        
    },
}

/*
объект с полем игры
*/
const field = {

    // получает div class="board"

    getElement() {
        return  document.getElementsByClassName('board')[0]
    },
    
    // отрисовывает поле и присваивает каждой клетке дата-
    // атрибут с порядковым номером
    render() {
        const field = this.getElement(); 
        for (let i = 1; i <= 9; i++) {
            let cell = document.createElement('input');
            cell.dataset.position = i;
            field.appendChild(cell);
        }
    },

    // получает каждую клетку

    getCells() {
        return document.querySelectorAll('input');
    },
    // очищает поле и выводит сообщение о победе в игре
    cleanField() {
        let board = field.getElement();
        board.innerHTML= `<h3>Game over!</h3> ${players.player} win!`;
    },
    // выводит сообщение о ничье
    getMessageDraw(){
        let board = field.getElement();
        board.innerHTML= `<h3>Game over! This is draw!</h3>`;
    },
    // окрашивает зеленым выигрышную комбинацию
    renderWin(winComb){
        const cells = this.getCells();
        for(cell of cells) {
            for(num of winComb) {
                if(cell.dataset.position == num) {
                    cell.style.color = 'green';
                   
                  } 
              }
             
          }
    }

}

window.addEventListener('load', game.start);


