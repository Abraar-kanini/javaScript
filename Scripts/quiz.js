let questions = [
    {
      question: "what is my name",
      Option: ["abraar", "abbu", "john", "abe"],
      correectAnswer: "abraar",
    },
    {
      question: "what is my fav pragramming language",
      Option: ["c", "c++", "java", "c#"],
      correectAnswer: "c#",
    },
    {
      question: "what is my name",
      Option: ["abraar", "abbu", "john", "abe"],
      correectAnswer: "abraar",
    },
    {
      question: "what is my fav pragramming language",
      Option: ["c", "c++", "java", "c#"],
      correectAnswer: "c#",
    },
  ];

  let option1 = document.getElementById("option1");
  let labelForOption1 = document.querySelector('label[for="option1"]');

  let option2 = document.getElementById("option2");
  let labelForOption2 = document.querySelector('label[for="option2"]');

  let option3 = document.getElementById("option3");
  let labelForOption3 = document.querySelector('label[for="option3"]');

  let option4 = document.getElementById("option4");
  let labelForOption4 = document.querySelector('label[for="option4"]');

  let numberofquestions = questions.length;
  console.log(numberofquestions);
  let questionIndex = 0;

  function Nextquestion() {
    console.log("next button is clicked");
    var radioButtons = document.querySelectorAll('input[type="radio"]');

    // Loop through radio buttons and deselect them
    radioButtons.forEach(function (radioButton) {
      radioButton.checked = false;
    });

    questionIndex++;
    displayQuestionWithOption();
  }

  function displayQuestionWithOption() {
    if (questionIndex < numberofquestions) {
      let question = document.getElementById("question");
      question.innerText = questions[questionIndex]?.question;

      option1.value = questions[questionIndex]?.Option[0];
      labelForOption1.innerText = questions[questionIndex]?.Option[0];

      option2.value = questions[questionIndex]?.Option[1];
      labelForOption2.innerText = questions[questionIndex]?.Option[1];

      option3.value = questions[questionIndex]?.Option[2];
      labelForOption3.innerText = questions[questionIndex]?.Option[2];

      option4.value = questions[questionIndex]?.Option[3];
      labelForOption4.innerText = questions[questionIndex]?.Option[3];
      console.log(option1);
      console.log(question);
    }
  }

  let score = 0;
  let feedback = document.getElementById("Feedback");
  let OnChnage = (event) => {
    let SelectedOption = event.target?.value;
    if (SelectedOption == questions[questionIndex]?.correectAnswer) {
      score++;
      feedback.classList.remove("hidden");

      feedback.innerText = "Correct Answer";

      console.log(score);
    } else {
      feedback.innerText = "wrong Answer";
    }

    // Nextquestion();
    setTimeout(() => {
      Nextquestion();
    }, 1000);
  };
  let totalscore = document.getElementById("score");

  document
    .getElementById("quixsubmit")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      Submit();
    });

  function Submit() {
    totalscore.innerText = `Your Total Score ${score}`;
  }

  displayQuestionWithOption();