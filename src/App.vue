<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
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
    },
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
    src: url("./assets/font/Recoleta-Regular.ttf") format('truetype'),
        url("./assets/font/Recoleta-Regular.woff2") format('woff2');
}
@font-face {
    font-family: "Recoleta-Bold";
    src: url("./assets/font/Recoleta-Bold.ttf") format('truetype'),
        url("./assets/font/Recoleta-Bold.woff2") format('woff2');
}
@font-face {
    font-family: "Recoleta-SemiBold";
    src: url("./assets/font/Recoleta-SemiBold.ttf") format('truetype'),
        url("./assets/font/Recoleta-SemiBold.woff2") format('woff2');
}
/* icons styles */
@font-face {
    font-family: 'icomoon';
    src:  url('./assets/icomoon/fonts/icomoon.eot?onuepi');
    src:  url('./assets/icomoon/fonts/icomoon.eot?onuepi#iefix') format('embedded-opentype'),
        url('./assets/icomoon/fonts/icomoon.ttf?onuepi') format('truetype'),
        url('./assets/icomoon/fonts/icomoon.woff?onuepi') format('woff'),
        url('./assets/icomoon/fonts/icomoon.svg?onuepi#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>