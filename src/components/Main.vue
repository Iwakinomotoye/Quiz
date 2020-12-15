<template>
    <div>
        <progress v-bind:max="total" v-bind:value="id"></progress>
        <div class="main">
            <div v-if="loading">
                loading...
            </div>
            <div v-else>
                <div v-if="errored">
                    Sorry we are not able to retrieve this information at the moment, 
                    please try again later.
                </div>
                <div v-else-if="id == total" class="results">
                    <h2 v-if="numberOfCorrect == 0">Too Poor.</h2>
                    <h2 v-else-if="numberOfCorrect < (total / 2)">Too Low, try again.</h2>
                    <h2 v-else-if="numberOfCorrect < (total / 2)">Fair enough, Welldone.</h2>
                    <h2 v-else-if="numberOfCorrect == total">Excellent.</h2>
                    <h2>You got {{numberOfCorrect}} out of {{total}} correctly.</h2>
                </div>
                <div v-else>
                    <div class="question">
                        <span>{{id + 1}}. </span>
                        <span v-html="question">{{question}}</span>
                    </div>
                    <li v-for="option in options" v-bind:key="option.index"
                    v-bind:class="{red: selected == option, green: correctAnswer == option}" 
                    v-on:click="$emit('checkAnswer', option)">
                    <span class="mark-icon" v-if="correctAnswer == option"><img src="../assets/check-mark.svg" alt="" height="20px"></span>
                    <span class="mark-icon" v-else-if="selected == option"><img src="../assets/error.svg" alt="" height="20px"/></span>
                    <span class="mark-icon" v-else><img src="../assets/empty-circle.svg" alt="" height="20px"/></span>
                    <span v-html="option">{{option}}</span>
                    </li>
                    <div v-show="correctAnswer !== ''" @click="$emit('next')" class="next-btn">
                        Next Question
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: "Main",
    data() {
        return {
            questions: [],
            // questions: [],
            // id: 0,
            // question: "",
            // options: [],
            // errored: false,
            // loading: true,
            // correctAnswer: "",
            // selected: ""
        }
    },
    props: {
        question : String,
        id: Number,
        errored: Boolean,
        loading: Boolean,
        options: Array,
        correctAnswer: String,
        selected: String,
        total: Number,
        numberOfCorrect: Number
    },
    computed : {
        // questionss: function() {
        //     // this.questions = this.childQuestions;
        //     return this.childQuestions;
        // }
    },
    methods: {
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
            // display the first question of this array
            this.question = this.questions[this.id].question;
            // options for the first question of this array
            let answers = [];
            answers.push(...this.questions[this.id].incorrect_answers);
            answers.push(this.questions[this.id].correct_answer);
            this.shuffleArray(answers);
            this.options = answers;
            this.correctAnswer = "";
        },
        // checkAnswer(option) {
        //     this.correctAnswer = this.questions[this.id].correct_answer;
        //     if(this.correctAnswer == option) {
        //         this.selected = "";
        //     } else {
        //         this.selected = option;
        //     }
        // }
    },
    mounted: function() {
        // axios.get('https://opentdb.com/api.php?amount=20&category=27&type=multiple')
        // .then(response => {
            // this.questions = response.data.results;
            // console.log(this.questions.length);
            // console.log(this.questions);

            //shuffleArray of questions
            // this.shuffleArray(this.questions);

            // this.displayQuestion();
        // })
        // .catch(error => {
        //     console.log(error);
        //     this.errored = true;
        // })
        // .finally(() =>this.loading = false)
    }
}
</script>

<style scoped>
progress {
    background-color: #eee;
    width: 100%;
    position: relative;
    top: -2px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset; */
}
progress[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(-45deg, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
    -webkit-linear-gradient(left, #09c, #f44);
    background-size: 35px 20px, 100% 100%, 100% 100%;
}
.main {
    position: relative;
    top: -4px;
    box-sizing: border-box;
    width: 100%;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
@media (min-width: 768px) {
    .main {
        width: 500px;
    }
}
.green {
    background-color: green;
}
.red {
    background-color: red;
}
.green:hover, .red:hover {
    opacity: 1;
}
.question {
    font-size: 18px;
}
.mark-icon {
    margin-right: 10px;
}
li {
    cursor: pointer;
    display: flex;
    align-items: center;
    list-style-type: none;
    background: rgb(10, 110, 143);
    margin: 10px 0;
    padding: 15px 10px;
    border-radius: 3px;
    color: #fff;
}
li:hover {
    opacity: 0.8;
}
.next-btn {
    color: #fff;
    width: 90%;
    text-align: center;
    margin: 10px auto;
    background: dodgerblue;
    border-radius: 3px;
    padding: 15px 0;
    cursor: pointer;
}
.results {
    padding: 30px 0 80px 0;
    color: #3b0e49;
    text-align: center;
}
</style>