<template>
    <div>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>
        <b-container fluid class="mt--7">
            <b-row>
                <b-col>
                    <job-details v-show="typecontent === 'details'" @job-detail-event="changeContent"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import JobDetails from './contents/JobDetails'
    export default {
        name: "Jobs",
        data() {
            return {
                typecontent: 'details'
            }
        },
        props: { },
        components: {
            JobDetails
        },
        methods: {
            changeContent(payload){
                this.typecontent = payload.typecontent
            }
        }
    }
</script>

<style scoped>

</style>