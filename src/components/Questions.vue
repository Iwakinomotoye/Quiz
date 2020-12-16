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
                        <div>Question 5 of 20</div>
                        <!-- for loop of span active with js -->
                        <div class="progress">
                            <span></span><span class="current"></span>
                        </div>
                    </div>
                    <div class="main-question">
                        <div class="question">What five letter word is the motto of the IBM Computer company?</div>
                        <div class="options">
                            <div class="correct-answer">
                                <div class="custom-radio">
                                    <input type="radio" name="option"/>
                                    <span></span>
                                </div>
                                <div>Login</div>
                            </div>
                            <div class="wrong-answer">
                                <div class="custom-radio">
                                    <input type="radio" name="option"/>
                                    <span></span>
                                </div>
                                <div>Pixel</div>
                            </div>
                            <div>
                                <div class="custom-radio">
                                    <input type="radio" name="option"/>
                                    <span></span>
                                </div>
                                <div>Think</div>
                            </div>
                            <div>
                                <div class="custom-radio">
                                    <input type="radio" name="option"/>
                                    <span></span>
                                </div>
                                <div>Click</div>
                            </div>
                        </div>
                    </div>
                    <div class="page-handler">
                        <button class="back-button"><span class="icon-left-arrow"></span>Back</button>
                        <button class="next-button">Next<span class="icon-arrow"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
export default {
    name: "Questions",
    components: {
        Header
    },
    data() {
        return {
            categoryName: null,
            categoryImage: null,
        }
    },
    created() {
        this.$store.dispatch("getQuestions");
        const category = this.$store.getters.getCategoryName;
        this.categoryName = category.name;
        this.categoryImage = category.url;
        if (!category) {
            this.$router.push("/categories");
        }
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
    .category-description > div {
        width: fit-content;
        margin: 0 auto;
    }
    .category-description > img {
        border-radius: 10px;
        margin: 0 auto;
        display: block;
        margin-top: 22px;
        width: 220px;
        height: 189px;
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
    .progress > span {
        display: inline-block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: #3F5266;
        margin-right: 10px;
    }
    .progress > span:last-of-type {
        margin-right: 0;
    }
    .progress > .current {
        background: #EE8572;
    }
    .main-question {
        border-bottom: 1px solid rgba(255, 255, 255, 0.51);
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
    }
    .custom-radio {
        position: relative;
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
        width: 25px;
        height: 25px;
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
    .wrong-answer {
        border: 1px solid #F03434;
    }
    .correct-answer {
        border: 1px solid #35C801;
    }
    .wrong-answer::after, .correct-answer::after {
        display: inline-block;
        
        height: 32px;
    }
    .wrong-answer::after {
        content: url('../assets/images/wrong.svg');
        margin-left: 60px;
    }
    .correct-answer::after {
        content: url('../assets/images/correct.svg');
        margin-left: 50px;
    }
    .page-handler {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .back-button, .next-button {
        border: 0;
        width: 181px;
        height: 60px;
        background: rgba(53, 73, 94, 0.95);
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
</style>