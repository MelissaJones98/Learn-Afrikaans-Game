# Learn Afrikaans Game

A browser-based multiple-choice quiz for learning Afrikaans vocabulary. Pick a topic, read the Afrikaans word, and choose its English meaning from four options. It's written in plain HTML, CSS and JavaScript, with no frameworks or build step.

## Features

- 151 words across 7 question sets
- Instant feedback, including the correct answer when you get one wrong
- A running score
- Questions shuffled each time a quiz page loads
- A Home button on every quiz page for switching topics

## Question sets

| Set | Questions |
| --- | ---: |
| Greetings | 5 |
| Colours | 10 |
| Days of the Week | 7 |
| Months | 12 |
| Family | 24 |
| Animals | 65 |
| Numbers | 28 |

## Running locally

The game needs to run from a local web server at the server root, because the code checks for the exact path `/index.html`. Opening the file directly (`file://`) won't work.

You'll need [Python 3](https://www.python.org/downloads/) or another static file server.

```sh
git clone git@github.com:MelissaJones98/Learn-Afrikaans-Game.git
cd Learn-Afrikaans-Game
python -m http.server 8000
```

Then open <http://localhost:8000/index.html>, including the `/index.html` part. The bare `http://localhost:8000/` address won't start the game.

Avoid servers that strip `.html` from URLs, such as `npx serve`, because they redirect `/index.html` to `/`.

## How to play

1. Choose a question set on the home page.
2. Click the English meaning of the Afrikaans word shown.
3. Check the result and score below the answers. The next question appears straight away.
4. Click **Home** to change topic.

Quizzes have no end screen. After the last question, the same shuffled order repeats and your score keeps counting. Reloading the page or going Home resets the score.

## Project structure

```text
index.html             Home page listing the question sets
<set name>.html        One quiz page per question set (animals.html, colours.html, ...)
script.js              All question data and game logic
style.css              Shared styles
```

The quiz pages all have the same markup. `script.js` works out which set to load from the page's filename, so `days_of_the_week.html` loads the "Days of the Week" set.

## Adding a question set

1. Add an entry to the `questionSets` array in `script.js`. `correctAnswer` is the zero-based position of the right option in `answers`:

   ```js
   {
       questionSetTitle: "Food",
       questions: [
           {
               title: "Brood",
               answers: ["Milk", "Bread", "Cheese", "Water"],
               correctAnswer: 1
           }
       ]
   }
   ```

2. Copy an existing quiz page and name it after the title: lowercase, with spaces replaced by underscores (for example, `food.html`).
3. Add another `<li class="questionSets"></li>` to the list in `index.html`.

Each question needs exactly four answers, because each quiz page has four answer slots.

## Known limitations

- **Hosting:** the game only works at the root of a domain, because of the exact `/index.html` check and the Home button's absolute link. A GitHub Pages project site, which serves from `/Learn-Afrikaans-Game/`, won't work without changes.
- **Answer order:** only the questions are shuffled, so each word's correct answer is always in the same position.
