<template>
    <div class="header">
        <button v-show="questNumber" v-on:click="$emit('restart')">Restart</button>
        <div class="current">
        <h3>Toye Quiz App</h3>
        <div v-if="questNumber < total" v-show="questNumber">Your Score: {{numberOfCorrect}}/{{questNumber + 1}}</div>
        </div>
        <div v-show="total > 0">0:{{countdown}}s</div>
    </div>
</template>

<script>
export default {
name: "Header"
// https://opentdb.com/api.php?amount=20&category=27&type=multiple
,
props: {
    total: Number,
    numberOfCorrect: Number,
    questNumber: Number,
    countdown: Number
}
}
</script>

<style  scoped>
.header {
    box-sizing: border-box;
    width: 100%;
    background: rgb(10, 110, 143);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    color: #fff;
}
button {
    padding: 10px 20px;
    background-color: red;
}
.header h3 {
    margin-right: 10px;
}
.current {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (min-width: 768px) {
    .header {
        width: 500px;
    }
}
</style>