<template>
    <layout>
        <div class="container">
            <h1>Create Post</h1>
            <div>
                <form @submit.prevent="addPost">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" v-model="form.title" id="title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="body">Body</label>
                        <textarea v-model="form.body" id="body" cols="30" rows="10" class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </layout>
</template>

<script>
import { InertiaLink, Inertia } from 'inertia-vue'
import Layout from '@/Shared/Layout'
import axios from 'axios'

export default {
    data() {
        return {
            errors: {},
            form: {
                title: null,
                body: null,
            }
        }
    },
    components: {
        Layout,
        InertiaLink
    },
    methods: {
        addPost: function() {
            axios.post('/posts', this.form)
                .then(() => {
                    Inertia.visit('/posts')
                }).catch(({ response }) => {
                    this.errors = response.data.errors
                })
        }
    }
}
</script>

<style>

</style>
