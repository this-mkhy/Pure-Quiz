

class Quiz {
  constructor(quizElement, amount, questions) {
    this.quizElement = quizElement;
    this.currentElement = document.querySelector('.current');
    this.totalElement = document.querySelector('.total');
    this.nextButton = document.querySelector('#next');
    this.finalElement = document.querySelector('.final')

    this.totalAmount = amount;
    this.answeredAmount = 0;
   
  }


}

export default Quiz;