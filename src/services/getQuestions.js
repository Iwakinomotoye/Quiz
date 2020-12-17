import axios from 'axios';
import shuffleArray from "../helper/shuffleArray";
import { store } from "../store";

export default function getQuestions(categoryValue) {
    return new Promise((resolve, reject) => {
        axios.get(`https://opentdb.com/api.php?amount=20&category=${categoryValue}&type=multiple`)
        .then(response => {
            let questions = response.data.results;

            questions = shuffleArray(questions);

            store.commit("setQuestions", questions);

            resolve();
        })
        .catch(error => {
            reject(error);
        })
    })
}