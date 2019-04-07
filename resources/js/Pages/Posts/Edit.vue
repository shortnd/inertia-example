<template>
    <layout>
        <div class="card">
            <div class="card-header">Edit</div>
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label for="post-title" class="col-md-4 text-right">Title</label>
                        <div class="col-md-6"><input type="text" v-model="post.title" id="post-title" class="form-control"></div>
                    </div>

                    <div class="form-group row">
                        <label for="post-body" class="col-md-4 text-right">Body</label>
                        <div class="col-md-6">
                            <textarea v-model="post.body" id="post-body" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <button @click.prevent="updatePost" class="btn btn-primary">Update</button> -
                        <form class="d-inline-block">
                            <button @click.prevent="deletePost" class="btn btn-danger">Delete</button>
                        </form>
                    </div>
                </form>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import { Inertia } from 'inertia-vue'
import axios from 'axios'

export default {
    props: {
        post: Object
    },
    components: {
        Layout
    },
    data () {
        return {
            postForm: this.post,
        }
    },
    methods: {
        updatePost() {
            axios.patch(`/posts/${this.postForm.uuid}`, this.postForm)
                .then(() => Inertia.visit('/posts'))
                .catch(({ response }) => {console.log(response.data.errors)})
        },
        deletePost() {
            axios.delete(`/posts/${this.postForm.uuid}`)
                .then(() => Inertia.visit('/posts'))
                .catch(({ response }) => console.log(response.data.errors))
        }
    }
}
</script>

<style>

</style>
