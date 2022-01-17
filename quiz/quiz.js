import Final from './final.js';
import Question from './question.js'

class Quiz {
  constructor(quizElement, amount, questions) {
    this.quizElement = quizElement;
    this.currentElement = document.querySelector('.current');
    this.totalElement = document.querySelector('.total');
    this.nextButton = document.querySelector('#next');
    this.finalElement = document.querySelector('.final')

    this.totalAmount = amount;
    this.answeredAmount = 0;
    this.questions = this.setQuestions(questions);
    
    this.nextButton.addEventListener('click', this.nextQuestion.bind(this));
    this.renderQuestion();
  }

  setQuestions(questions) {
    return questions.map(question => new Question(question));
  }

  //render the question
  renderQuestion() {
    this.questions[this.answeredAmount].render();
    this.currentElement.innerHTML = this.answeredAmount;
    this.totalElement.innerHTML = this.totalAmount;
  }

  //check the answer of the question before going to the next question
  nextQuestion() {
    const checkedElement = this.questions[this.answeredAmount].answerElements.filter(el => el.firstChild.checked);
    if (checkedElement.length === 0) {
      alert('You need to select an answer');
    } else {
      this.questions[this.answeredAmount].answer(checkedElement)
      this.showResult();
      this.answeredAmount++;
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
    
    const correctAnswersTotal = this.calculateCorrectAnswers();

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