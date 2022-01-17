class Final {
    constructor(correctAnswers, totalAmount) {
      this.scoreElement = document.querySelector('.score');
      this.againButton = document.querySelector('#again');
  
      this.render(correctAnswers, totalAmount);
      
      //reload the page
      this.againButton.addEventListener('click', location.reload.bind(location));
      //this.againButton.addEventListener('click', startAgain);

    }
    
    //reload the page
    // startAgain = () => {
    //     location.reload()
    // }

    render(countCorrectAnswers, allTotalAmount) {
      this.scoreElement.innerHTML = `<mark> You answered ${countCorrectAnswers} out of ${allTotalAmount} correct!</mark>`;
    }
  }
  
  export default Final;