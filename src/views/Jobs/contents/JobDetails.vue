<template>
    <card>
        <b-row align-v="center" slot="header" >
            <b-col cols="8">
                <h3 class="mb-0">Details Job</h3>
            </b-col>
            <b-col cols="4" class="text-right">
                <a @click="emitJobDetailsEvent" href="javascript:;" class="btn btn-sm">
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
                        >
                        </base-input>
                    </b-col>
                </b-row>
                <b-row >
                    <b-col lg="6">
                        <base-input
                                type="text"
                                label="Category"
                                :disabled="!edit"/>
                    </b-col>
                    <b-col lg="6">
                        <label class="form-control-label">Status</label>
                        <div>
                            <a href="javascript:;" class="btn btn-sm btn-success">Active</a>
                            <a href="javascript:;" class="btn btn-sm btn-error">Inactive</a>
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
                                placeholder="https://facebook.com/example"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12">
                        <base-input
                                type="text"
                                label="Intagram Link"
                                :disabled="!edit"
                                placeholder="https://instagram.com/example"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <base-input
                                type="text"
                                label="Linkedin Link"
                                :disabled="!edit"
                                placeholder="https://linkedin.com/example"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12">
                        <base-input
                                type="text"
                                label="Telegram Link"
                                :disabled="!edit"
                                placeholder="https://telegram.com/example"/>
                    </b-col>
                </b-row>
            </div>


        </b-form>

    </card>
</template>

<script>

    import axios from 'axios'
    export default {
        name: "job-details",
        data() {
            return {
                info: null,
                loading: true,
                errored: false,
                job: [],
                edit: false
            };
        },
        methods: {
            emitJobDetailsEvent() {
                this.$emit('job-detail-event', { typecontent: 'details' })
            },
            changeEditionStaus(){
                this.fetchJob();
                if (this.edit){
                    this.edit = false
                }else{
                    this.edit = true
                }

                console.log(this.edit)
            },
            async fetchJob() {
                console.log("LECHATON")
                let headers = new Headers();

                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');

                headers.append('Access-Control-Allow-Origin', '*');

                try {
                    const url = `http://localhost:8000/api/v1/job/1/`
                    const response = await axios.get(url, {headers: headers})
                    const result = response.data
                    this.job = result.map(resp => ({
                        title: resp.title,
                        description: resp.description
                    }))
                } catch (err) {
                    if (err.response) {
                        console.log("Server Error:", err)
                    } else if (err.request) {
                        console.log("Network Error:", err)
                    } else {
                        console.log("Client Error:", err)
                    }
                }
            },
            mounted() {
                this.fetchJob();
            }
        }
    }
</script>

<style scoped>

</style>