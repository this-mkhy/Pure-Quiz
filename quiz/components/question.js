class Question {
    constructor(question) {
        //question in the dom
        this.questionElement = document.querySelector('#question');
        //answers in the dom
        this.answerElements = [
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4'),
        ];

        //get from the object in our api
        //get the question
        this.question = question.question;

        //get the correct answer
        this.correctAnswer = question.correct_answer;

        //get the isCorrect and make it false
        this.isCorrect = false;
    
        //all answers, correct and incorrect
        // this.answers = this.shuffleAnswers([
        //     question.correct_answer, 
        //     ...question.incorrect_answers
        // ]);
        this.answers = [question.correct_answer, ...question.incorrect_answers];
    }
    
    // shuffleAnswers(answers) {
    //     for (let i = answers.length - 1; i > 0; i--){
    //       const j = Math.floor(Math.random() * i)
    //       const temp = answers[i]
    //       answers[i] = answers[j]
    //       answers[j] = temp
    //     }
    //     return answers;
    //   }
    
    //check answer is correct or not
    //this function work in quiz Class
    answer(checkedElement) {
       this.isCorrect = (checkedElement[0].textContent === this.correctAnswer) ? true : false;
    }
  
    render() {
      this.questionElement.innerHTML = this.question;
      this.answerElements.forEach((el, index) => {
        el.innerHTML = 
        '<input type="radio" name="radio"><span class="checkmark"></span>' + this.answers[index];
      });
    }
  }
  
  export default Question;