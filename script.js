let questions = [
    {
        title: 'Gato',
        answers: ['Dog','Cat', 'Bird', 'Fish'],
        correctAnswer: 1
    },
    {
        title: 'Ave',
        answers: ['Mouse', 'Hamster', 'Lizard', 'Bird'],
        correctAnswer: 3
    },
    {
        title: 'Rata',
        answers: ['Cat', 'Fish', 'Rat', 'Shark'],
        correctAnswer: 2
    },
    {
        title: 'Mosca',
        answers: ['Fly', 'Puma', 'Fish', 'Dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function() {
        this.currentPosition = 0;
        this.score = 0;
        let ans = document.querySelectorAll(".answer");
        ans.forEach((element, index) => {
            element.addEventListener("click", () => {
                this.checkAnswer(index);
            });
        });
        this.updateStats();
        this.showQuestion(questions[this.currentPosition]);
    },
    showQuestion: function(q) {
        let titleDiv = document.getElementById("title");
        titleDiv.textContent = q.title;
        let ans = document.querySelectorAll(".answer");
        ans.forEach(function(element, index) {
            element.textContent = q.answers[index];
        });
    },
    checkAnswer: function(userSelected) {
        let currentQuestion = questions[this.currentPosition];
        if(currentQuestion.correctAnswer == userSelected) {
            console.log("Correct Answer!")
            this.score++;
            this.showResult(true);
        }
        else {
            console.log("Incorrect Answer!")
            this.showResult(false);
        }
        this.updateStats();
        this.increasePosition();
        this.showQuestion(questions[this.currentPosition]);
    },
    increasePosition: function() {
        this.currentPosition++;
        if(this.currentPosition == questions.length) {
            this.currentPosition = 0;
        }
    },
    updateStats: function() {
        let scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Your Score: ${this.score}`;
    },
    showResult: function(isCorrect) {
        let resultDiv = document.getElementById("result");
        let result = "";
        if(isCorrect) {
            result = "Correct Answer!";
        }
        else {
            let currentQuestion = questions[this.currentPosition];
            let correctAnswIndex = currentQuestion.correctAnswer;
            let correctAnswText = currentQuestion.answers[correctAnswIndex];
            result = `Incorrect Answer! Correct Answer: ${correctAnswText}`;
        }
        resultDiv.textContent = result;
    }
};

app.start();
