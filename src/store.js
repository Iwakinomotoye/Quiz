import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: "quiz-app",
    storage: window.localStorage,
})

const quizApp = {
    category: {},
    questions: [],
}

export const store = new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    state: function() {
        return quizApp;
    },
    mutations: {
        setCategory (state, category) {
            state.category = category;
        },
        setQuestions (state, questions) {
            state.questions = questions;
        }
    },
    actions: {
        getQuestions({commit}, payload) {
            console.log(payload);
            console.log(commit);
            // axios.get(`https://opentdb.com/api.php?amount=20&category=${this.categoryValue}&type=multiple`)
            // .then(response => {
            //     this.state.questions = response.data.results;

            //     console.log(this.state.questions)

            //     // this.shuffleArray(this.questions);

            //     // this.displayQuestion();
            // })
            // //make sure you use this errored and loading
            // .catch(() => {
            //     this.errored = true;
            // })
            // .finally(() =>this.loading = false)
        }
    },
    getters: {
        getCategoryName(state) {
            return state.category;
        } 
    }
})
