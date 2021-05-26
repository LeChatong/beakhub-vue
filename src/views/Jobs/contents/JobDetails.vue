<template>
    <card>
        <b-row align-v="center" slot="header" >
            <b-col cols="8">
                <h3 class="mb-0">Details Job</h3>
            </b-col>
            <b-col cols="4" class="text-right">
                <a @click="emitJobDetailsEvent" href="javascript:;" class="btn btn-sm" v-bind:class="{'btn-danger' : job.is_active}">
                    activate
                </a>
                <a @click="changeEditionStaus" href="javascript:;" class="btn btn-sm btn-primary">
                    <span v-show="edit"><i class="ni ni-lock-circle-open"></i></span>
                    <span v-show="!edit"><i class="ni ni-lock-circle"></i></span>
                    Edit
                </a>
            </b-col>
        </b-row>
        <b-form @submit.prevent="updateProfile">

            <div class="pl-lg-4">
                <b-row>
                    <b-col lg="6">
                        <base-input
                                type="text"
                                label="Title"
                                placeholder="Title"
                                :disabled="!edit"
                                v-model="job.title"/>
                    </b-col>
                    <b-col lg="6">
                        <base-input
                                type="text"
                                label="User"
                                placeholder="johndoe"
                                :disabled="!edit"
                                v-model="job.user.username"
                        >
                        </base-input>
                    </b-col>
                </b-row>
                <b-row >
                    <b-col lg="6">
                        <base-input
                                type="text"
                                label="Category"
                                :disabled="!edit"
                                v-model="job.category"/>
                    </b-col>
                    <b-col lg="6">
                        <label class="form-control-label">Status</label>
                        <div>
                            <a v-show="job.is_active" href="javascript:;" class="btn btn-sm btn-success">Active</a>
                            <a v-show="!job.is_active" href="javascript:;" class="btn btn-sm btn-error">Inactive</a>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12">
                        <b-form-group label="Description" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                            <b-form-textarea rows="4" :disabled="!edit" v-model="job.description" id="about-form-textaria" placeholder="Job Description"></b-form-textarea>
                        </b-form-group>
                    </b-col>
                </b-row>
            </div>
            <hr class="my-4">

            <!-- Social Media -->
            <h6 class="heading-small text-muted mb-4">Social Media</h6>

            <div class="pl-lg-4">
                <b-row>
                    <b-col md="12">
                        <base-input
                                type="text"
                                label="Facebook Link"
                                :disabled="!edit"
                                placeholder="https://facebook.com/example"
                                v-model="job.link_facebook"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12">
                        <base-input
                                type="text"
                                label="Intagram Link"
                                :disabled="!edit"
                                placeholder="https://instagram.com/example"
                                v-model="job.link_instagram"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <base-input
                                type="text"
                                label="Linkedin Link"
                                :disabled="!edit"
                                placeholder="https://linkedin.com/example"
                                v-model="job.link_linkedin"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12">
                        <base-input
                                type="text"
                                label="Telegram Link"
                                :disabled="!edit"
                                placeholder="https://telegram.com/example"
                                v-model="job.link_telegram"/>
                    </b-col>
                </b-row>
            </div>
        </b-form>
    </card>
</template>

<script>
    export default {
        name: "job-details",
        data() {
            return {
                job: {
                    title: 'Creative Code Inc.',
                    description: 'LeChatong',
                    user: {
                        company: 'Creative Code Inc.',
                        username: 'LeChatong',
                        email: 'ulrich.tchatong@gmail.com',
                        firstName: 'Tchatong',
                        lastName: 'Ulrich',
                        address: 'Logbessou',
                        city: 'Douala',
                        country: 'Cameroun',
                        postalCode: '',
                        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
                    },
                    category: 'Tchatong',
                    is_active: true,
                    link_facebook: 'Logbessou',
                    link_instagram: 'Douala',
                    link_linkedin: 'Cameroun',
                    link_snapchat: '',
                    link_telegram: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
                    created_at: ''
                },
                edit: false
            };
        },
        methods: {
            emitJobDetailsEvent() {
                this.$emit('job-detail-event', { typecontent: 'details' })
            },
            changeEditionStaus(){
                if (this.edit){
                    this.edit = false
                }else{
                    this.edit = true
                }

                console.log(this.edit)
            }
        }
    }
</script>

<style scoped>

</style>