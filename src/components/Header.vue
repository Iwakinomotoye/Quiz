<template>
    <router-link to="/home">
        <img src="@/assets/images/logo.svg" alt="wizzed" class="logo"/>
    </router-link>
</template>

<style scoped>
    .logo {
        position: absolute;
        top: 61px;
        left: 75px;
    }
    @media (max-width: 1439.98px) {
        .logo {
            top: 4.236vw;
            left: 5.208vw;
        }
    }
    @media (max-width: 767.98px) {
        .logo {
            top: 30px;
            left: 6.667vw;
        }
    }
</style>