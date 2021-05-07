<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <b-row align-v="center" slot="header" >
                <b-col cols="8">
                    <h3 class="mb-0">User List</h3>
                </b-col>
                <b-col cols="4" class="text-right">
                    <a @click="emitAddUserEvent" href="javascript:;" class="btn btn-sm btn-primary">Add user</a>
                </b-col>
            </b-row>

        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="users">
            <el-table-column label="Username"
                             min-width="140px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" src="img/lechatong.jpg">
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.username}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="First Name"
                             prop="first_name"
                             min-width="140px">
            </el-table-column>
            <el-table-column label="Last Name"
                             prop="last_name"
                             min-width="140px">
            </el-table-column>
            <el-table-column label="Email"
                             prop="email"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Phone Number"
                             min-width="140px"
                             prop="phone">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                        <!--<i :class="`bg-${row.statusType}`"></i>-->
                        <span class="status">{{row.phone}}</span>
                    </badge>
                </template>
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>

<script>
    import { Table, TableColumn} from 'element-ui'

    export default {
        name: "user-list",
        components: {
            [Table.name]: Table,
            [TableColumn.name]: TableColumn
        },
        data() {
            return {
                users: [
                    {
                        username: "LeChatong",
                        email: null,
                        first_name: null,
                        last_name: null,
                        birth_date: null,
                        phone: "+2250709042109",
                        country: "CI",
                    },
                    {
                        username: "Ulrich12",
                        email: "ulrich.tchatong@yahoo.fr",
                        first_name: "Ulrich Armel",
                        last_name: "Tchatong",
                        birth_date: "1994-04-12",
                        phone: "+237697548444",
                        country: "CM",
                    }
                ],
                currentPage: 1
            };
        },
        methods: {
            emitAddUserEvent() {
                this.$emit('add-user-event', { typecontent: 'edit' })
            },
            mounted() {
                console.log(this.users)
            }
        }
    }
</script>

<style scoped>

</style>