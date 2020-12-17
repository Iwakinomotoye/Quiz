<template>
    <div class="categories">
        <div class="page-content">
            <div class="header-section">
                <h2>Choose a Category</h2>
                <router-link class="close" to="/home">Close</router-link>
            </div>
            <div class="category-list">
                <button v-for="category in categories" :key="category.value" 
                    @click="selectCategory(category)" 
                    class="category-button">
                    <span :class="category.icon"></span>
                    {{category.name}}
                    <span class="icon-arrow"></span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import getQuestions from "../services/getQuestions";
export default {
    name: 'Category',
    data() {
        return {
            category: null,
            categories: [
                {
                    url: "animals.jpg",
                    name: "Animals",
                    icon: "icon-pawprint",
                    value: "27"
                },
                {
                    url: "history.jpg",
                    name: "History",
                    icon: "icon-scroll",
                    value: "23"
                },
                {
                    url: "celebrities.jpg",
                    name: "Celebrities",
                    icon: "icon-star",
                    value: "26"
                },
                {
                    url: "mathematics.jpg",
                    name: "Mathematics",
                    icon: "icon-abacus",
                    value: "19"
                },
                {
                    url: "computers.jpg",
                    name: "Computers",
                    icon: "icon-computer",
                    value: "18"
                },
                {
                    url: "music.jpg",
                    name: "Music",
                    icon: "icon-microphone",
                    value: "12"
                },
                {
                    url: "film.jpg",
                    name: "Film",
                    icon: "icon-camera",
                    value: "11"
                },
                {
                    url: "sports.jpg",
                    name: "Sports",
                    icon: "icon-football",
                    value: "21"
                },
            ]
        }
    },
    methods: {
        selectCategory(category) {
            this.$store.commit("setCategory", category);
            getQuestions(category.value)
            .then(() => {
                this.$router.push("/questions");
            })
        }
    },
}
</script>
<style scoped>
    a {
        text-decoration: none;
        display: inline-block;
    }
    .categories {
        background: #35495E;
        min-height: 100vh;
        min-width: 100%;
    }
    .page-content {
        max-width: 850px;
        margin: 0 auto;
        padding: 97px 25px 70px 25px;
    }
    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(240, 240, 240, 0.2);
    }
    .header-section h2 {
        font-family: "Recoleta-Bold";
        background: -webkit-linear-gradient(#EE8572,#FFFFFF 150%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .close {
        font-weight: bold;
        font-size: 14px;
        height: 22px;
        font-family: "Recoleta";
        background: inherit;
        color: rgba(255, 255, 255, 0.51);
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.51);
        outline: 0;
    }
    .close:focus {
        border-bottom: 2px solid lightblue;
    }
    .category-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .category-button {
        height: 60px;
        width: 47.0588%;
        background: rgba(225, 225, 225, 0.1);
        border-radius: 10px;
        border: 0;
        color: rgba(255, 255, 255, 0.65);
        font-size: 1.5rem;
        line-height: 1.5;
        font-family: "Recoleta-SemiBold";
        display: flex;
        align-items: center;
        padding: 0 35px;
        margin-top: 40px;
    }
    .category-button:hover, .category-button:focus {
        background: #EE8572;
        border: 1px solid #EE8572;
        color: #fff;

    }
    .category-button > span:first-of-type {
        margin-right: 35px;
    }
    .category-button > span:last-of-type {
        margin-left: auto;
    }
    @media (max-width: 991.98px) {
        .category-button {
            font-size: 1.2rem;
        }
    }
    @media (max-width: 767.98px) {
        .category-button {
            padding: 0 20px;
        }
        .category-button > span:first-of-type {
            margin-right: 20px;
        }
    }
    @media (max-width: 575.98px) {
        .page-content {
            padding: 53px 25px;
        }
        .header-section {
            flex-direction: column-reverse;
        }
        .header-section a {
            margin-right: 0;
            margin-left: auto;
            margin-bottom: 27px;
        }
        .header-section h2 {
            width: 100%;
        }
        .category-list {
            flex-direction: column;
        }
        .category-button {
            width: 100%;
            padding: 0 35px;
            font-size: 1.375rem;
        }
        .category-button > span:first-of-type {
            margin-right: 35px;
        }
    }
    @media (max-width: 424.98px) {
        .category-button {
            padding: 0 20px;
        }
    }
    @media (max-width: 374.98px) {
        .category-button {
            font-size: 1.2rem;
        }
        .category-button > span:first-of-type {
            margin-right: 20px;
        }
    }

    /* icon styles */
    .icon-abacus:before {
        content: "\e900";
    }
    .icon-arrow:before {
        content: "\e901";
    }
    .icon-camera:before {
        content: "\e902";
    }
    .icon-computer:before {
        content: "\e903";
    }
    .icon-football:before {
        content: "\e904";
    }
    .icon-microphone:before {
        content: "\e905";
    }
    .icon-pawprint:before {
        content: "\e906";
    }
    .icon-scroll:before {
        content: "\e907";
    }
    .icon-star:before {
        content: "\e908";
    }
    .icon-abacus:before, .icon-arrow:before, .icon-camera:before, .icon-computer:before, .icon-football:before, .icon-microphone:before, .icon-pawprint:before, .icon-scroll:before, .icon-star:before {
        color: rgba(255, 255, 255, 0.65);
    }
    .category-button:hover .icon-abacus:before, .category-button:hover .icon-arrow:before, .category-button:hover .icon-camera:before, .category-button:hover .icon-computer:before, .category-button:hover .icon-football:before, .category-button:hover .icon-microphone:before, .category-button:hover .icon-pawprint:before, .category-button:hover .icon-scroll:before, .category-button:hover .icon-star:before {
        color: #fff;
    }
</style>