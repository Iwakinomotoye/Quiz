<template>
    <div class="app">
        <!-- <Header :total="totalQuestions" :questNumber="id" :numberOfCorrect="numberOfCorrect"
        v-on:restart="restart" :countdown="countdown"/>
        <Main v-if="categorySelected" :question="question" :id="id" :loading="loading" :errored="errored" :total="totalQuestions"
        :options="options" :correctAnswer="correctAnswer" v-on:checkAnswer="checkAnswer"
        :selected="selected" v-on:next="nextQuestion" :numberOfCorrect="numberOfCorrect"/>
        <Category v-else v-on:setCategory="setCategory"/> -->
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';
// import Header from './components/Header';
// import Main from './components/Main';
// import Category from './components/Category';
export default {
    name: 'App',
    components: {
        // Header,
        // Main,
        // Category
    },
    data() {
        return {
            questions: [],
            totalQuestions: 0,
            question: "",
            id: 0,
            errored: false,
            loading: true,
            options: [],
            correctAnswer: "",
            selected: "",
            numberOfCorrect: 0,
            alreadyClicked: false,
            categorySelected: false,
            countdown: 20,
        }
    },
    methods: {
        startTimer() {
            let time = setInterval(() => {
                this.countdown--;
                if(this.countdown == 0) {
                    this.checkAnswer();
                    clearInterval(time);
                }
            }, 1000);
        },
        restart() {
            this.categorySelected = false;
            this.numberOfCorrect= 0;
            this.id = 0;
        },
        setCategory(category) {
            this.categorySelected = true;
            axios.get(`https://opentdb.com/api.php?amount=20&category=${category}&type=multiple`)
            .then(response => {
                this.questions = response.data.results;
                this.totalQuestions = this.questions.length;
                // console.log(this.questions);

                //shuffleArray of questions
                this.shuffleArray(this.questions);

                this.displayQuestion();
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() =>this.loading = false)
        },
        shuffleArray(arr) {
            for(let i = 0; i < arr.length; i++) {
                let randomIndex = Math.floor(Math.random() * (arr.length));
                let elementInRandomIndex = arr[randomIndex];
                arr[randomIndex] = arr[i];
                arr[i] = elementInRandomIndex;
            }
            return arr;
        },
        displayQuestion() {
            if(this.id < this.totalQuestions) {
                // display the first question of this array
                this.question = this.questions[this.id].question;
                // options for the first question of this array
                let answers = [];
                answers.push(...this.questions[this.id].incorrect_answers);
                answers.push(this.questions[this.id].correct_answer);
                this.shuffleArray(answers);
                this.options = answers;
                this.correctAnswer = "";
                this.countdown = 20;
                this.startTimer();
            }
        },
        checkAnswer(option) {
            if(!this.alreadyClicked) {
                this.correctAnswer = this.questions[this.id].correct_answer;
                if(this.correctAnswer == option) {
                    this.selected = "";
                    this.numberOfCorrect++;
                } else {
                    this.selected = option;
                }
                this.alreadyClicked = true;
            }
        },
        nextQuestion() {
            this.id++;
            this.displayQuestion();
            this.alreadyClicked = false;
        }
    },
    created: function() {

    }
}
</script>

<style>
* {
    font-family: "Recoleta", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*:focus {
    outline: 0;
    box-shadow: 0 0 0 2px lightblue;
}
@font-face {
    font-family: "Recoleta";
    src: url("./assets/font/Recoleta-Regular.ttf");
}
@font-face {
    font-family: "Recoleta-Bold";
    src: url("./assets/font/Recoleta-Bold.ttf");
}
@font-face {
    font-family: "Recoleta-SemiBold";
    src: url("./assets/font/Recoleta-SemiBold.ttf");
}
/* .app {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    @media (min-width: 768px) {
        .app {
            margin-top: 100px;
        }
    }
button {
    outline: none;
    padding: none;
    color: #fff;
    border-radius: 3px;
    border: none;
} */
</style>