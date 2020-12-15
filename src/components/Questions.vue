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
    }
    .category-description {
        background: rgba(225, 225, 225, 0.1);
        border-radius: 10px;
        height: 278px;
        width: 260px;
        padding-top: 13px;
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
</style>