<template>
    <b-row aling-v="center" class="justify-content-lg-between">
        <b-col lg="6">
            <div class="copyright text-center text-lg-left text-muted">
                © {{ year }} <a href="" class="font-weight-bold ml-1" target="_blank">LeChatong</a>
            </div>
        </b-col>
        <b-col lg="6">
            <b-nav align="center" class="nav-footer justify-content-lg-end">
                <b-nav-item href="" target="_blank">
                    BeakHub
                </b-nav-item>
                <b-nav-item href="" target="_blank">
                    About Us
                </b-nav-item>
                <b-nav-item href="" target="_blank">
                    Mobile App
                </b-nav-item>
                <b-nav-item href="" target="_blank">
                    License
                </b-nav-item>
            </b-nav>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "ContentFooter",
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>