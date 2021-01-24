<template>
    <div class="results">
        <Header/>
        <div class="page-content">
            <router-link to="/categories" class="back">Back to Categories</router-link>
            <div class="inner-content">
                <div class="category">
                    <span class="category-text">Category:</span>
                    <span class="category-name">{{categoryName}}</span>
                </div>
                <div class="circle">
                    <div class="inner"></div>
                    <div class="inner-two"></div>
                    <div class="inner-three"></div>
                    <div class="inner-circle">
                        <p>You scored</p>
                        <p class="score-count">{{theScore}}/{{totalQuestions}}</p>
                        <p class="percentage">{{thePercentage}}%</p>
                    </div>
                </div>
                <div class="result-message">
                    <p v-if="percentage < 50">Failure today can mean success tomorrow.</p>
                    <p v-else>Well done! You have done great.</p>
                </div>
                <div class="page-handler">
                    <button class="start-again" @click="restart()">Take Quiz Again</button>
                    <!-- <button class="share">Share on Twitter</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
import getQuestions from "../services/getQuestions";

export default {
    name: "Questions",
    components: {
        Header
    },
    computed: {
        percentage() {
            let percentage = (this.score/this.totalQuestions) * 100;
            percentage = parseInt(percentage);
            return isNaN(percentage) ? 0 : percentage;
        }
    },
    data() {
        return {
            categoryName: null,
            categoryImage: null,
            score: 0,
            theScore: 0,
            totalQuestions: 0,
            thePercentage: 0
        }
    },
    methods: {
        restart() {
            this.$store.commit("setScore", 0);
            this.$store.commit("setQuestions", []);
            let category = this.$store.getters.getCategory;
            getQuestions(category.value)
            .then(() => {
                this.$router.push("/questions");
            });
        },
        percentCounter(value) {
            let initial = 0;
            let counting = setInterval(() => {
                initial++;
                this.thePercentage = initial;
                if(initial === value) {
                    clearInterval(counting)
                }
            }, 50)
        },
        scoreCounter(value) {
            let initial = 0;
            let counting = setInterval(() => {
                initial++;
                this.theScore = initial;
                if(initial === value) {
                    clearInterval(counting)
                }
            }, 250)
        }
    },
    mounted() {
        this.score = this.$store.getters.getScore;
        this.totalQuestions = this.$store.getters.getQuestions.length;
        let degree, degreeTwo = 0;

        if(this.percentage > 50 ) {
            degree = -225 + 180;
            degreeTwo = -45 + (((this.percentage - 50) * 2 / 100) * 180);
        } else {
            degree = -225 + (this.percentage * 2 / 100) * 180;
        }

        let inner = document.querySelector('.inner');
        let innerThree = document.querySelector('.inner-three')
        
        setTimeout(() => {
            inner.style.transform = `rotate(${degree}deg)`;
        }, 100);
        if(this.percentage > 50) {
            setTimeout(() => {
                innerThree.style.display = "inline-block";
                innerThree.classList.add("trans");
            }, 2500);
            setTimeout(() => {
                innerThree.style.transform = `rotate(${degreeTwo}deg)`;
            }, 2550);
        }
        
        if(this.percentage > 0) {
            this.percentCounter(this.percentage);
            this.scoreCounter(this.score);
        }
    }
}
</script>

<style scoped>
    .results {
        width: 100%;
        min-height: 100vh;
        background: #35495E;
        padding: 1px 0 1px 0;
    }
    .page-content {
        /* width: 1032px;
        height: 675px; */
        width: 71.667vw;
        min-height: 46.875vw;
        background: rgba(225, 225, 225, 0.1);
        border-radius: 10px;
        margin: 100px auto 100px auto;
        padding: 35px 30px 35px 30px;
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
        margin-right: 20px;
    }
    .inner-content {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .category {
        display: flex;
    }
    .category-text, .percentage {
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
    .circle {
        position: relative;
        margin: 35px 0 15px 0;
        width: 317px;
        height: 317px;
        background: #EE8572;
        border-radius: 50%;
    }
    .inner-circle {
        position: absolute;
        border-radius: 50%;
    }
    .inner, .inner-two, .inner-three {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        left: 0;
        top: 0;
    }
    .inner {
        transition: all 2.6s;
        background-image: linear-gradient(225deg, transparent 50%, #3F5266 50%);
        transform: rotate(-225deg);
        z-index: 0;
    }
    .inner-two {
        z-index: 1;
        background-image: linear-gradient(180deg, transparent 50%, #3F5266 50%);
    }
    .inner-three {
        background-image: linear-gradient(45deg, transparent 50%, #EE8572 50%);
        transform: rotate(-45deg);
        z-index: 2;
        display: none;
    }
    .trans {
        transition: all 2.5s;
    }
    .inner-circle {
        background: #47596e;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 70%;
        z-index: 3;
        transform-origin: center;
        left: 15%;
        top: 15%;
    }
    .circle p:first-of-type {
        font-size: 16px;
        color: #fff;
    }
    .percentage {
        font-weight: bold;
        font-size: 36px;
        line-height: 1.0;
    }
    .score-count {
        font-size: 18px;
        line-height: 2;
        color: #FFFFFF;
        margin: 10px 0 25px 0;
    }
    .result-message {
        width: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 2.25;
        color: #FFFFFF;
        padding-bottom: 35px;
        border-bottom: 1px solid rgba(240, 240, 240, 0.2);
    }
    .page-handler {
        width: 100%;
        margin-top: 35px;
        padding: 0 45px;
        display: flex;
        justify-content: space-between;
    }
    .start-again, .share {
        border: 0;
        width: 181px;
        height: 60px;
        background: inherit;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
        line-height: 2.25;
        color: #EE8572;
        border: 1px solid #EE8572;
    }
    .start-again:focus, .start-again:hover, .share:focus, .share:hover {
        box-shadow: none !important;
        background: #EE8572;
        color: #3F5266;
    }
    @media (max-width: 767.98px) {
        .page-content {
            width: 85vw;
        }
        .page-handler {
            padding: 0 25px;
        }
    }
    @media (max-width: 575.98px) {
        .page-content {
            width: 100%;
            background: inherit;
            margin: 0;
            padding: 0;
            margin-top: 53px;
        }
        .inner-content {
            background: rgba(225, 225, 225, 0.1);
            border-radius: 35px 35px 0px 0px;
            padding: 35px 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .page-handler {
            flex-direction: column;
            padding: 0;
            margin-top: 40px;
        }
        .start-again, .share {
            width: 100%;
            margin-bottom: 40px;
        }
    }
    @media (max-width: 424.98px) {
        .circle {
            width: 280px;
            height: 280px;
            /* border: 40px solid #EE8572; */
        }
    }
</style>