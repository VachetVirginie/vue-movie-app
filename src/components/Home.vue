<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">Which movie</div>
            <div class="display-3 font-weight-black white--text text-xs-center mb-3">are you going</div>
            <div class="display-2 font-weight-bold white--text text-xs-center">to watch today?</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/CiUR8zISX60');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>