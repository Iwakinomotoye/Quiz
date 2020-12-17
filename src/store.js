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
    },
    getters: {
        getCategoryName(state) {
            return state.category;
        },
        getQuestions(state) {
            return state.questions;
        }
    }
})
