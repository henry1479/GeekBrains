class Count {
    constructor(){
        this.count = 0;
    }
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
}



//class with questions of game


class Questions extends Count{
    constructor(){
        super();
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

        const questionBlock = document.querySelector("#question");
        questionBlock.innerHTML = this.storeQuestions[this.numberOfStage];
    }


}

//class with answers and right answer

class Answers extends Questions {
    constructor() {
        super();
        this.answers = [
            {key: 2, answers: ['1)love','2)hate', '3)heart', '4)soul']},
            {key: 1, answers: ['peace','horn', 'trade', 'last']},
            {key: 2, answers: ['heres','marki', 'vladi', 'miron']},
            {key: 3, answers: ['Jagger','Mercury', 'Tayler', 'Dylan']}
        ]
            
        
    }

    // display all answers into its block

    displayAnswers(index) {
        const answersBlock = document.querySelector('.answers');
        const source = this.answers[index];
        answersBlock.innerHTML = source.answers.join(',');
    }


    // check right answer
    checkAnswer () {
        //object in array of answers
        const source = this.answers[this.numberOfStage];
        const block = document.querySelector('.right__answer .right__answer--input');
        // the key in object is the right answer
        // check equality of the user answer and the key
        console.log(source.key);
        if (block.value === source.key.toString()) {
            console.log('Norm');
            // const questions = new Questions;
            this.numberOfStage++;
            // questions.numberOfStage++;
            // console.log(questions.numberOfStage)
            super.displayQuestion();
            this.displayAnswers(this.numberOfStage);
            super.increaseCount();
            block.value = '';
            

            
        } else {
            console.log(source.key);
        }
    }

    halfOfTrue() {
        const source = this.answers[this.numberOfStage];
        const rightAnswer = source.answers.splice(source.key-1,1);
        const index = this.constructor.getRandomNumber(source.answers);
        const addAnswer = source.answers.splice(index,1)
        source.answer = [...rightAnswer,...addAnswer];
        // if(index === 0) {
        //     source.answers.unshift(rightAnswer);
        // } else {
        //     source.answers.push(rightAnswer);
        // }
        console.log(index);
        const answersBlock = document.querySelector('.answers');
        answersBlock.innerHTML = source.answers.join(',');
        return

    }
    
    static getRandomNumber(arr){
        return Math.floor(Math.random() * (arr.length-1))
    }

}

class Prompts extends Answers {
    constructor(){
        super();
    }

   

    
}




const init = () => {
    
    const button = document.querySelector('.choose-btn');
    const buttonHalf = document.querySelector('.half_to_half');
    console.log()
    

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
    button.addEventListener('click', answers.checkAnswer.bind(answers));
    buttonHalf.addEventListener('click', answers.halfOfTrue.bind(answers));
}


window.onload = init;