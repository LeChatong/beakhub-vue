<template>
    <div>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success"></base-header>
        <b-container fluid class="mt--7">
            <b-row>
                <b-col>
                    <!--<user-list v-show="typecontent === 'list'" @add-user-event="changeContent"/>-->
                    <user-edit v-show="typecontent === 'edit'" @list-user-event="changeContent"/>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>

    import UserList from './contents/UserList'
    import UserEdit from './contents/UserEdit'

    export default {
        name: "Users",
        data() {
            return {
                typecontent: 'edit'
            }
        },
        props: { },
        components: {
            UserList,
            UserEdit
        },
        methods: {
            changeContent(payload){
                this.typecontent = payload.typecontent
            }
        }
    }
</script>

<style scoped>
    .el-table.table-dark{
        background-color: #172b4d;
        color: #f8f9fe;
    }

    .el-table.table-dark th,
    .el-table.table-dark tr{
        background-color: #172b4d;
    }

    .el-table.table-dark td,
    .el-table.table-dark th.is-leaf{
        border-bottom: none;
    }
</style>