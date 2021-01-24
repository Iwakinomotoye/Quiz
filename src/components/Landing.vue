<template>
    <div class="landing">
        <div class="loader" v-if="loading">
            <div class="line-one">
                <div class="slash-background">
                    <span class="lower-slash"></span><span class="upper-slash"></span>
                </div>
                <span class="wizzed">wizzed</span>
            </div>
            <p class="brown-text">/Quizzed/</p>
            <p class="white-text">n. The act of getting quizzed and enjoying it</p>
        </div>
        <div v-if="!loading">
            <section class="section-one">
                <img src="@/assets/images/landingBackground.svg" alt="" class="background"/>
                <img src="@/assets/images/landingBackground-min.svg" alt="" class="background-min"/>
                <Header></Header>
                
                <div class="section-one-content">
                    <div class="text-content">
                        <h1 class="heading-one">Hey You,</h1>
                        <h1 class="heading-two">I have a feeling you</h1>
                        <h1 class="heading-two">will enjoy this Quiz</h1>
                        <h1 class="heading-two">about <span class="animals">animals</span></h1>
                        <div>
                            <router-link to="/categories">
                                <button class="take-quiz">
                                    <img src="@/assets/images/play_circle_filled.svg" alt="" />
                                    Take a Quiz</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="image-content">
                        <div class="image-container">
                            <img src="@/assets/images/horse.jpg" alt="horses" />
                            <div class="image-caption">
                                <p>Did you know ?</p>
                                <p>Domestic horses have a lifespan of around 25 years.</p>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="@/assets/images/swim.jpg" alt="horses" />
                            <div class="image-caption">
                                <p>Did you know ?</p>
                                <p>Domestic horses have a lifespan of around 25 years.</p>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="@/assets/images/testing-three.jpg" alt="horses" />
                            <div class="image-caption">
                                <p>Did you know ?</p>
                                <p>Domestic horses have a lifespan of around 25 years.</p>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="@/assets/images/testing-four.jpg" alt="horses" />
                            <div class="image-caption">
                                <p>Did you know ?</p>
                                <p>Domestic horses have a lifespan of around 25 years.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
export default {
    name: "Landing",
    components: {
        Header,
    },
    data() {
        return {
            loading: null,
        }
    },
    methods: {
        shuffle(first, second, third, fourth) {
            let container = document.querySelector(`.image-container:nth-of-type(${first})`);
            let containerTwo = document.querySelector(`.image-container:nth-of-type(${second})`);
            let containerThree = document.querySelector(`.image-container:nth-of-type(${third})`);
            let containerFour = document.querySelector(`.image-container:nth-of-type(${fourth})`);

            if (window.innerWidth > 500) {
                container.style.transform = 'translateY(-380px) translateX(105px) translateZ(-300px)';
                containerTwo.style.transform = 'translateY(0px) translateX(0px) translateZ(0px)';
                containerThree.style.transform = 'translateY(-20px) translateX(35px) translateZ(-100px)';
                containerFour.style.transform = 'translateY(-40px) translateX(70px) translateZ(-200px)';
                setTimeout(() => {
                    container.style.zIndex = 1;
                    containerTwo.style.zIndex = 4;
                    containerThree.style.zIndex = 3;
                    containerFour.style.zIndex = 2;
                    container.style.transform = 'translateY(-60px) translateX(105px) translateZ(-300px)';
                }, 500);
            } else {
                container.style.transform = 'translateY(-250px) translateX(0px) translateZ(-300px)';
                containerTwo.style.transform = 'translateY(0px) translateX(0px) translateZ(0px)';
                containerThree.style.transform = 'translateY(-20px) translateX(0px) translateZ(-100px)';
                containerFour.style.transform = 'translateY(-40px) translateX(0px) translateZ(-200px)';
                setTimeout(() => {
                    container.style.zIndex = 1;
                    containerTwo.style.zIndex = 4;
                    containerThree.style.zIndex = 3;
                    containerFour.style.zIndex = 2;
                    container.style.transform = 'translateY(-60px) translateX(0px) translateZ(-300px)';
                }, 500);
            } 
        }
    },
    mounted() {
        if (this.$router.currentRoute.path === "/home") {
            this.loading = false;
        } else {
            this.loading = true;
            setTimeout(()=>this.loading=false,5500);
        }

        let count = 0;
        setInterval(()=> {
            count++;
            if(count === 1) {
                this.shuffle(1, 2, 3, 4);
            }
            if(count === 2) {
                this.shuffle(2, 3, 4, 1);
            }
            if(count === 3) {
                this.shuffle(3, 4, 1, 2);
            }
            if(count === 4) {
                this.shuffle(4, 1, 2, 3);
                count = 0;
            }
        }, 2000);

    },
    created() {
        window.localStorage.removeItem("quiz-app");
    }
}
</script>

<style lang="css" scoped>
    /* start of loading styles */
    .loader {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #35495E;
    }
    .loader-image {
        height: 51px;
    }
    .line-one {
        display: flex;
        margin-left: -180px;
    }
    .wizzed {
        font-family: "Recoleta-Bold";
        color: #EE8572;
        font-size: 33px;
        margin-left: 30px;
    }
    .brown-text {
        color: #EE8572;
        font-family: "Recoleta-Bold";
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
    .white-text {
        color: #fff;
        font-size: 14px;
        font-family: "Recoleta-SemiBold";
    }
    .lower-slash, .upper-slash {
        display: inline-block;
        border-radius: 10px;
        width: 13px;
        height: 46px;
        background: #EE8572;
        transform-origin: 40px 40px;

    }
    .lower-slash {
        box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.25);
        transform: rotate(-135deg);
        transform-origin: 7.5px 10px;
        animation: lowerSlash 1s ease-in-out infinite;
    }
    .upper-slash {
        box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
        transform: rotate(-45deg);
        transform-origin: -1px 15px;
        animation: upperSlash 1s ease-in-out infinite;
    }
    @keyframes lowerSlash {
        0% {
            transform: rotate(-135deg);
        }
        50% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(-135deg);
        }
    }
    @keyframes upperSlash {
        0% {
            transform: rotate(-45deg);
        }
        50% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(-45deg);
        }
    }
    .slash-background {
        position: relative;
        display: flex;
        margin-top: 17px;
        animation: moveRight 4s linear infinite;
        animation-delay: 2s;
    }
    .slash-background::before {
        content: "";
        background-image: linear-gradient(130deg, #35495E 78%, transparent 22%);
        width: 150px;
        margin-top: -20px;
        margin-right: -41px;
    }
    @keyframes moveRight {
        from {
            transfrom: translateX(0);
        }
        to {
            transform: translateX(150px);
        }
    }
    /* end of loading styles */

    a {
        text-decoration: none;
        display: inline-block;
    }
    .landing {
        width: 100%;
        height: 100vh;
    }
    .background {
        min-height: 100vh;
        object-fit: cover;
    }
    .background-min {
        display: none;
    }
    .section-one {
        height: fit-content;
        max-height: 100vh;
        background: #35495E;
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .section-one-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        perspective: 1000px;
    }
    .section-one-content > * {
        margin-bottom: -120px;
    }
    .text-content {
        text-align: left;
        font-weight: 900;
        color: #EE8572;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .image-content {
        margin-right: 7.569vw;
        position: relative;
        width: 454px;
        height: 308px;
    }
    .image-container {
        position: absolute;
        transition: transform 0.5s;
    }
    .image-container:nth-of-type(1) {
        transform: translateY(0px) translateX(0px) translateZ(0px);
        z-index: 4;
    }
    .image-container:nth-of-type(2) {
        transform: translateY(-20px) translateX(35px) translateZ(-100px);
        z-index: 3;
    }
    .image-container:nth-of-type(3) {
        transform: translateY(-40px) translateX(70px) translateZ(-200px);
        z-index: 2;
    }
    .image-container:nth-of-type(4) {
        transform: translateY(-60px) translateX(105px) translateZ(-300px);
        z-index: 1;
    }
    .image-content img {
        width: 454px;
        height: 308px;
        border-radius: 10px;
        border: 5px solid #fff;
        object-fit: cover;
    }
    .image-caption {
        color: #fff;
        font-size: 1rem;
        position: absolute;
        left: 5px;
        bottom: 10px;
        right: 5px;
        border-radius: 0 0 5px 5px;
        background: rgba(53, 73, 94, 0.58);
        padding: 16px 0;
        text-align: center;
    }
    .text-content > h1 {
        background: -webkit-linear-gradient(#EE8572,#FFFFFF 150%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .text-content > * {
        width: 574px;
        margin: 0 auto 0 5.208vw;
        font-family: "Recoleta-Bold";
    }
    .heading-one {
        font-size: 32px;
        line-height: 35px;
        margin-bottom: 20px;
    }
    .heading-two {
        font-size: 64px;
    }
    .animals {
        font-family: "Recoleta-Bold";
        background: #fff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .take-quiz {
        background: #fff;
        height: 60px;
        border-radius: 10px;
        color: #35495E;
        width: 253px;
        font-size: 24px;
        line-height: 26px;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        margin-top: 40px;
        font-family: "Recoleta-Bold";
    }
    .take-quiz img {
        margin-right: 29px;
    }
    
    @media (max-width:1199.98px) {
        .background {
            min-width: 110vw;
        }
        .text-content > * {
            width: 400px;
        }
        .heading-two {
            font-size: 44px;
        }
        .image-content {
            width: 409px;
            height: 278px;
        }
        .image-content img {
            width: 409px;
            height: 278px;
        }
    }
    @media (max-width: 991.98px) {
        .text-content > * {
            width: 350px;
        }
        .heading-one {
            font-size: 28px;
        }
        .heading-two {
            font-size: 36px;
            line-height: 1.67;
        }
        .image-content {
            width: 365px;
            height: 248px;
        }
        .image-content img {
            width: 365px;
            height: 248px;
        }
        .image-caption {
            font-size: 0.875rem;
        }
    }
    @media (max-width: 799.98px) {
        .image-content {
            width: 320px;
            height: 218px;
        }
        .image-content img {
            width: 320px;
            height: 218px;
        }
        .image-caption {
            font-size: 0.75rem;
        }
    }
    @media (max-width: 767.98px) {
        .landing, .section-one, .section-one-content {
            max-height: unset;
            height: fit-content;
        }
        .background {
            display: none;
        }
        .background-min {
            display: block;
            position: relative;
            min-width: 100vw;
            min-height: 100vh;
        }
        .section-one-content {
            flex-direction: column-reverse;
        }
        .section-one-content > * {
            margin-bottom: 0;
        }
        .text-content {
            text-align: center;
            width: 100%;
            margin-top: 8vh;
        }
        .text-content > * {
            width: 100%;
            margin: 0;
        }
        .heading-one {
            line-height: normal;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .heading-two {
            line-height: normal;
            font-size: 1.75rem;
            margin-bottom: 0.625rem;
        }
        .image-content {
            margin-right: auto;
            margin-left: auto;
            margin-bottom: auto;
            margin-top: 220px;
            width: 324px;
            height: 179px;
            max-width: 86.667vw;
        }
        .image-container:nth-of-type(1) {
            transform: translateY(0px) translateX(0px) translateZ(0px);
        }
        .image-container:nth-of-type(2) {
            transform: translateY(-20px) translateX(0px) translateZ(-100px);
        }
        .image-container:nth-of-type(3) {
            transform: translateY(-40px) translateX(0px) translateZ(-200px);
        }
        .image-container:nth-of-type(4) {
            transform: translateY(-60px) translateX(0px) translateZ(-300px);
        }
        .image-content img {
            width: 324px;
            height: 179px;
            max-width: 100%;
            border: 3px solid #fff;
        }
        .take-quiz {
            margin: auto;
        }
    }
</style>