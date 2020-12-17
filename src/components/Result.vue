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
                    <div class="inner-circle">
                        <p>You scored</p>
                        <p class="score-count">{{score}}/{{totalQuestions}}</p>
                        <p class="percentage">{{percentage}}%</p>
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
            return percentage = parseInt(percentage);
        }
    },
    data() {
        return {
            categoryName: null,
            categoryImage: null,
            score: 0,
            totalQuestions: 0
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
    },
    mounted() {
        this.score = this.$store.getters.getScore;
        this.totalQuestions = this.$store.getters.getQuestions.length;
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
        margin: 35px 0 15px 0;
        width: 317px;
        height: 317px;
        padding: 50px;
        background: #EE8572;
        border-radius: 50%;
        /* border: 50px solid #EE8572;
        border-width: 50px;
        border-style: solid;
        border-color: #EE8572 #EE8572 #EE8572 transparent; */
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    }
    .inner-circle {
        background: #47596e;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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