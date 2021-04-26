<template>
    <div class="content">
        <FadeTransition :duration="200" mode="out-in">
            <router-view></router-view>
        </FadeTransition>
    </div>
</template>

<script>
    import { FadeTransition } from 'vue2-transitions'
    export default {
        name: "Content",
        components: {
            FadeTransition
        }
    }
</script>

<style scoped>

</style>