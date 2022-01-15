class Final {
    constructor(correctAnswers, totalAmount) {
      this.scoreElement = document.querySelector('.score');
      this.againButton = document.querySelector('#again');
  
      this.render(correctAnswers, totalAmount);
      this.againButton.addEventListener('click', startAgain());
    }
    
    //reload the page
    startAgain = () => {
        location.reload()
    }

    render(countCorrectAnswers, allTotalAmount) {
      this.scoreElement.innerHTML = `You answered ${countCorrectAnswers} out of ${allTotalAmount} correct!`;
    }
  }
  
  export default Final;