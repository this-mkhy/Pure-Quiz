import Final from './components/final.js';
import Question from './components/question.js'

class Quiz {
  constructor(quizElement, amount, questions) {
    this.quizElement = quizElement;
    this.currentElement = document.querySelector('.current');
    this.totalElement = document.querySelector('.total');
    this.nextButton = document.querySelector('#next');
    this.finalElement = document.querySelector('.final')

    this.totalAmount = amount;
    this.answeredAmount = 0;

    //array of objects
    this.questions = this.setQuestions(questions);
    
    this.nextButton.addEventListener('click', this.nextQuestion.bind(this));
    this.renderQuestion();
  }

  //get a copy of Question object to use answer and render function and all keys that are exist in the question class
  setQuestions(questions) {
    return questions.map(question => new Question(question));
  }

  //render the question
  renderQuestion() {
    //get a question from our Question class, render it and update the currentElement and totalElement
    this.questions[this.answeredAmount].render();
    this.currentElement.innerHTML = this.answeredAmount;
    this.totalElement.innerHTML = this.totalAmount;
  }

  //check the answer of the question before going to the next question
  nextQuestion() {
    //check which element is checked
    const checkedElement = this.questions[this.answeredAmount].answerElements.filter(el => el.firstChild.checked);
    
    //if you didn't check
    if (checkedElement.length === 0) {
      alert('You need to select an answer');
    } else {
      //check if the checked is correct or not
      this.questions[this.answeredAmount].answer(checkedElement)
      this.showResult();

      //next question
      this.answeredAmount++;

      //check if the answered questions is less than total questions
      (this.answeredAmount < this.totalAmount) ? this.renderQuestion() : this.endQuiz();
    }
  }

  showResult() {
    this.questions[this.answeredAmount].isCorrect 
    ? alert('Correct answer :)') 
    : alert('Wrong answer :(');
  }

  endQuiz() {
    this.quizElement.style.display = 'none';
    //this.quizElement.style.visibility = 'hidden';

    this.finalElement.style.display = 'block';
    //this.finalElement.style.visibility = 'visible';
    
    //count correct answers
    const correctAnswersTotal = this.calculateCorrectAnswers();

    //call a copy of Final class and send to it 
    this.final = new Final(correctAnswersTotal, this.totalAmount);
    //new Final(correctAnswersTotal, this.totalAmount);
  }

  //count the correct answers
  calculateCorrectAnswers() {
    let count = 0;
    this.questions.forEach(el => {
      if (el.isCorrect) {
        count++;
      }
    });
    return count;
  }
}

export default Quiz;