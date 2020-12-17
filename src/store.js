import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: "quiz-app",
    storage: window.localStorage,
})

const quizApp = {
    category: {},
    questions: [],
    score: 0,
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
        },
        setScore (state, score) {
            state.score = score;
        }
    },
    actions: {
    },
    getters: {
        getCategory(state) {
            return state.category;
        },
        getQuestions(state) {
            return state.questions;
        },
        getScore(state) {
            return state.score;
        }
    }
})
