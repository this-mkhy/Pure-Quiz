class Question {
    constructor(question) {
        //question
        this.questionElement = document.querySelector('#question');
        //answers
        this.answerElements = [
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4'),
        ];
    
        //get the correct answer
        this.correctAnswer = question.correct_answer;
        this.question = question.question;
        this.isCorrect = false;
    
        //all answers
        this.answers = this.shuffleAnswers([
            question.correct_answer, 
            ...question.incorrect_answers
        ]);
    }

    //check answers
    answer(checkedElement) {
       this.isCorrect = (checkedElement[0].textContent === this.correctAnswer) ? true : false;
    }
  
    render() {
      this.questionElement.innerHTML = this.question;
      this.answerElements.forEach((el, index) => {
        el.innerHTML = 
        '<input type="radio" name="radio">' + this.answers[index];
      });
    }
  }
  
  export default Question;