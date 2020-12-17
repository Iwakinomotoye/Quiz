<template>
    <div class="questions">
        <Header/>
        <div class="page-content">
            <router-link to="/categories" class="back">Back to Categories</router-link>
            <div class="inner-content">
                <div class="category-description">
                    <div>
                        <span class="category-text">Category:</span>
                        <span class="category-name">{{categoryName}}</span>
                    </div>
                    <img :src="require('@/assets/images/' + categoryImage)" alt="" />
                </div>
                <div class="question-section">
                    <div class="question-position">
                        <div>Question {{currentQuestionNo}} of {{totalQuestions}}</div>
                        
                        <div class="progress">
                            <span v-for="count in totalQuestions" :key="count"
                            v-bind:class="{current: count==currentQuestionNo}"></span>
                        </div>
                    </div>
                    <div class="main-question">
                        <div class="question" v-html="question"></div>
                        <div class="options">
                            <!-- prevent input from changing after answer -->
                            <div v-for="(option, index) in options" :key="index"
                            v-bind:class="{correctAnswer: option===correctAnswer, wrongAnswer: option===selected}">
                                <div class="custom-radio">
                                    <input type="radio" name="option" @click="checkAnswer(option)"/>
                                    <span></span>
                                </div>
                                <div v-html="option"></div>
                            </div>
                        </div>
                    </div>
                    <div class="page-handler">
                        <!-- <button class="back-button"><span class="icon-left-arrow"></span>Back</button> -->
                        <button class="next-button" @click="nextQuestion()">Next<span class="icon-arrow"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
import shuffleArray from "../helper/shuffleArray";

export default {
    name: "Questions",
    components: {
        Header
    },
    data() {
        return {
            categoryName: null,
            categoryImage: null,
            questions: [],
            question: "",
            options: [],
            totalQuestions: 0,
            currentQuestionNo: 1,
            correctAnswer: "",
            alreadyClicked: false,
            numberOfCorrect: 0,
            selected: "",
        }
    },
    methods: {
        displayQuestion() {
            if(this.currentQuestionNo < this.totalQuestions) {
                // display the first question of this array
                this.question = this.questions[this.currentQuestionNo].question;
                // options for the first question of this array
                let answers = [];
                answers.push(...this.questions[this.currentQuestionNo].incorrect_answers);
                answers.push(this.questions[this.currentQuestionNo].correct_answer);
                answers = shuffleArray(answers);

                this.options = answers;
                this.correctAnswer = "";
                // this.countdown = 20;
                // this.startTimer();
            } else {
                this.$router.push("/result");
                this.$store.commit("setScore", this.numberOfCorrect);
            }
        },
        checkAnswer(option) {
            if(!this.alreadyClicked) {
                this.correctAnswer = this.questions[this.currentQuestionNo].correct_answer;
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
            this.currentQuestionNo++;
            this.displayQuestion();
            this.alreadyClicked = false;
            let checkedRadio = document.querySelector("input[type='radio']:checked");
            if(checkedRadio) {
                checkedRadio.checked = false;
            }
        },
    },
    created() {
        const category = this.$store.getters.getCategory;
        this.categoryName = category.name;
        this.categoryImage = category.url;
        if (!category) {
            this.$router.push("/categories");
        }
    },
    mounted() {
        this.questions = this.$store.getters.getQuestions;
        this.totalQuestions = this.questions.length;
        this.displayQuestion();
    }
}
</script>

<style scoped>
    .questions {
        width: 100%;
        min-height: 100vh;
        background: #35495E;
    }
    .page-content {
        max-width: 89.583%;
        margin: 0 auto;
        padding: 106px 0px 70px 0px;
    }
    .back {
        font-size: 14px;
        font-family: "Recoleta";
        background: inherit;
        color: rgba(255, 255, 255, 0.51);
        text-decoration: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.51);
        display: block;
        width: fit-content;
        margin-left: auto;
    }
    .inner-content {
        margin-top: 37px;
        display: flex;
    }
    .category-description {
        background: rgba(225, 225, 225, 0.1);
        border-radius: 10px;
        height: 278px;
        width: 260px;
        padding-top: 13px;
        margin-right: 55px;
    }
    .question-section {
        min-width: calc(100% - 315px);
    }
    .category-description > div {
        width: fit-content;
        margin: 0 auto;
    }
    .category-description > img {
        border-radius: 10px;
        margin: 0 auto;
        display: block;
        margin-top: 22px;
        /* width: 220px; */
        width: 84.615%;
        /* height: 189px; */
        height: 67.986%;
        object-fit: cover;
    }
    .category-text {
        font-family: "Recoleta-Bold";
        background: -webkit-linear-gradient(#EE8572,#FFFFFF 150%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 16px;
        line-height: 36px;
    }
    .category-name {
        color: #fff;
        font-size: 18px;
        line-height: 36px;
        margin-left: 19px;
    }
    .question-position {
        font-size: 16px;
        line-height: 2.25;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        margin-bottom: 75px;
    }
    .question-position > div:first-of-type {
        margin-right: 15px;
    }
    .progress span {
        display: inline-block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: #3F5266;
        margin-right: 10px;
    }
    .progress span:last-of-type {
        margin-right: 0;
    }
    .progress .current {
        background: #EE8572;
    }
    .main-question {
        border-bottom: 1px solid rgba(240, 240, 240, 0.2);
    }
    .question {
        font-family: "Recoleta-SemiBold";
        font-size: 28px;
        line-height: 1.29;
        color: #FFFFFF;
    }
    .options > div {
        display: inline-block;
        margin: 42px 0;
        min-width: 181px;
        width: fit-content;
        padding: 10px 23px 10px 30px;
        height: 60px;
        background: rgba(225, 225, 225, 0.1);
        border-radius: 10px;
        color: #fff;
        font-size: 16px;
        line-height: 2.25;
        font-weight: 500;
        display: flex;
        align-items: center;
        position: relative;
    }
    .custom-radio {
        background: rgba(53, 73, 94, 0.95);
        border: 1px solid rgba(240, 240, 240, 0.3);
        box-sizing: border-box;
        border-radius: 10px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }
    .custom-radio input[type='radio'] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
    }
    .custom-radio input[type='radio'] + span {
        background: inherit;
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .custom-radio input[type='radio']:checked + span {
        background: #EE8572;
    }
    .wrongAnswer {
        border: 1px solid #F03434;
    }
    .correctAnswer {
        border: 1px solid #35C801;
    }
    .wrongAnswer::after, .correctAnswer::after {
        display: inline-block;
        height: 32px;
    }
    .wrongAnswer::after {
        content: url('../assets/images/wrong.svg');
        margin-left: 60px;
    }
    .correctAnswer::after {
        content: url('../assets/images/correct.svg');
        margin-left: 50px;
    }
    .page-handler {
        margin-top: 30px;
        display: flex;
        /* justify-content: space-between; */
        justify-content: flex-end;
    }
    .back-button, .next-button {
        border: 0;
        width: 181px;
        height: 60px;
        border-radius: 10px;
        background: rgba(225, 225, 225, 0.1);
        font-size: 16px;
        font-weight: 500;
        line-height: 2.25;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        color: #FFFFFF;
    }
    .back-button:focus, .next-button:focus {
        box-shadow: none !important;
        border: 1px solid #EE8572;
        color: #EE8572;
    }
    .icon-left-arrow:before {
        content: "\e909";
        color: #fff;
    }
    .icon-arrow:before {
        content: "\e901";
        color: #fff;
    }
    .back-button:focus .icon-left-arrow:before, .next-button:focus .icon-arrow:before {
        color: #EE8572;
    }
    @media (max-width: 1199.98px) {
        .category-description {
            height: 248px;
        }
        .question {
            font-size: 25px;
        }
    }
    @media (max-width: 991.98px) {
        .category-description {
            height: 220px;
        }
        .category-description > img {
            margin-top: 15px;
        }
        .question-position {
            flex-direction: column-reverse;
        }
        .question {
            font-size: 22px;
        }
    }
    @media (max-width: 767.98px) {
        .inner-content {
            flex-direction: column;
        }
        .category-description {
            height: 60px;
            margin-bottom: 30px;
        }
        .category-description > img {
            display: none;
        }
        .question {
            font-size: 20px;
        }
    }
    @media (max-width: 575.98px) {
        .progress span {
            width: 9.68px;
            height: 9.68px;
        }
        .question {
            font-size: 18px;
        }
        .back-button, .next-button {
            width: 120px;
        }
    }
</style>