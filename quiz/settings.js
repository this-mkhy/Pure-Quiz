
class Settings {
  constructor() {
    this.quizElement = document.querySelector('.quiz');
    this.settingsElement = document.querySelector('.settings');
    this.category = document.querySelector('#category');
    this.numberOfQuestions = document.querySelector('#questions');
    this.difficulty = [
      document.querySelector('#easy'),
      document.querySelector('#medium'),
      document.querySelector('#hard'),
    ];
    this.startButton = document.querySelector('#start');

    this.startButton.addEventListener('click', this.startQuizApp.bind(this));
  }

  async startQuizApp() {
    try {
      const amount = this.getAmount();
      const categoryId = this.category.value;
      const difficulty = this.getCurrentDifficulty();

      const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
      
      await this.fetchData(url);
      this.toggleVisibility();
      
    } catch (error) {
      alert(error);
    }
    
  } 

  toggleVisibility() {
    this.quizElement.style.display = 'block';
    //this.quizElement.style.visibility = 'visible';

    this.settingsElement.style.display = 'none';
    //this.settingsElement.style.visibility = 'hidden';
  }

  async fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  }

  //get the difficulty of the questions
  getCurrentDifficulty() {
    const checkedDifficulty = this.difficulty.filter(element => element.checked);

    //check if the user checked anything from (easy, medium, hard), it must be === 1 .. return id
    if (checkedDifficulty.length === 1) {
      return checkedDifficulty[0].id;
    } else {
      //alert("Please select difficulty")
      throw new Error('Please select a difficulty!');
    }
  }

  //Get to get the amound of questions
  getAmount() {
    const amount = this.numberOfQuestions.value;
    // Not negative, not 0 and not over 50
    if (amount > 0 && amount <= 20) {
      return amount;
    }
    //alert("Please enter a number of questions between 1 and 20")
    throw new Error('Please enter a number of questions between 1 and 20');
  }
}

export default Settings;