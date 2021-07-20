class Count {
    constructor(){
        this.count = 0;
        this.index = 0;
        
       
    }
    //function makes the count of points
    // depending of their number
    increaseCount(){
       if(this.count < 500){
            this.count +=100;
       } else if (this.count < 1000) {
           this.count += 500;
       } else if (this.count < 3000) {
           this.count += 2000;
       } else if (this.count < 10000){
           this.count += 5000
       }
       console.log(this.count);
    } 
    //function displays points at
    // the case of the right answer
    displayPoints(){
        //get blocks of points
        const pointBlock = document.querySelectorAll('.points-item');
        //add the <li>points</li> the style
        // with the property 'green'
        pointBlock[this.index].style.backgroundColor = 'green';
        //remove style from pevious <li></li>
        if (this.index !== 0) pointBlock[this.index-1].style.backgroundColor = 'red';
        //increment this.index
        this.index++;
        // console.log(pointBlock[this.index].innerHTML)
    }

    
}


//class with questions of game


class Questions extends Count{
    constructor(){
        super();
        //array with questions
        this.storeQuestions = [
            "New",
            "Pop",
            "Rap",
            "Rock"
        ],
        this.numberOfStage = 0  
    }

    // display question of the game
    // depending on stage
    displayQuestion(){
        console.log(this.numberOfStage);
        //get block for questions
        const questionBlock = document.querySelector("#question");
        //inner the question to block
        questionBlock.innerHTML = this.storeQuestions[this.numberOfStage];
        
    }


}

//class with answers and right answer

class Answers extends Questions {
    constructor() {
        super();
        //array with objects {key:property, answers: array}
        this.answers = [
            {key: 2, answers: ['1)love','2)hate', '3)heart', '4)soul']},
            {key: 1, answers: ['peace','horn', 'trade', 'last']},
            {key: 2, answers: ['heres','marki', 'vladi', 'miron']},
            {key: 3, answers: ['Jagger','Mercury', 'Tayler', 'Dylan']}
        ]
            
        
    }

    // display all answers into its block

    displayAnswers(index) {
        //get the block for answers
        const answersBlock = document.querySelector('.answers');
        //array with answers
        const source = this.answers[index];
        //inner the array without commas
        answersBlock.innerHTML = source.answers.join(',');
    }


    // check right answer
    checkAnswer () {
        //get the object with the key and array with answers
        const source = this.answers[this.numberOfStage];
        //get input for answers of the gamer
        const block = document.querySelector('.right__answer .right__answer--input');
        // the key in object is the right answer
        // check equality of the user answer and the key
        if (block.value === source.key.toString()) {
            console.log('Norm');
            this.numberOfStage++;
            super.displayQuestion();
            this.displayAnswers(this.numberOfStage);
            super.increaseCount();
            super.displayPoints();
            block.value = '';
            
        } else {
            this.displayEnd();
            console.log(source.key);
        }
    }
    // function realizes the prompt 50 to 50 of the
    //game 
    halfOfTrue() {
        //get the object with the key and array with answers
        const source = this.answers[this.numberOfStage];
        //remove the right answer from the array
        const rightAnswer = source.answers.splice(source.key-1,1);
        //generate any number
        const index = this.constructor.getRandomNumber(source.answers);
        //remove one of answers from the array with
        // answers
        const addAnswer = source.answers.splice(index,1);
        //make a check the index 
        // and form new array with right answer
        // and the addition answer
        if(index >= source.key-1) {
            source.answers = [...rightAnswer,...addAnswer];
        } else {
            source.answers = [...addAnswer,...rightAnswer];
        }
        //get the answer block
        const answersBlock = document.querySelector('.answers');
        // inner the array without commas
        answersBlock.innerHTML = source.answers.join(',');
        answersBlock.setAttribute('disabled');
        return

    }
    // static function generates any number from 0 to array.length
    static getRandomNumber(arr){
        return Math.floor(Math.random() * (arr.length))
    }

    //function displays a message about 
    // the end the games
    displayEnd(){
        const message = `<p class='end-game'>You finish your parting at the game. You cast: ${this.count}</p>`
        document.body.innerHTML = message;
    }



}

class Prompts extends Answers {
    constructor(){
        super();
    }

   

    
}




const init = () => {
    
    const button = document.getElementsByClassName('.choose-btn');
    const buttonHalf = document.querySelector('.half_to_half');
    console.log(button)
    

    const question = new Questions();
    const prompts = new Prompts; 
    const answers = new Answers();
    
    //display questions
    question.displayQuestion();
    //display answers
    answers.displayAnswers(answers.numberOfStage);
    // when the button is clicked 
    // checking of the user answer
    // is run then display the result 
    // of checking
    // button.addEventListener('click', answers.checkAnswer.bind(answers));
    buttonHalf.addEventListener('click', answers.halfOfTrue.bind(answers));
    const a = /abc/
   
    console.log(typeof(a+1))
}


window.onload = init;