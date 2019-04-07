<template>
    <layout>
        <div class="container">
            <h1 class="d-inline-block">All Posts</h1> - <inertia-link href="/posts/create">Create Post</inertia-link>
            <div v-if="posts">
                <div v-for="{uuid, title} in posts" :key="uuid">
                    <!-- {{ title }} -->
                    <inertia-link :href="`/posts/${uuid}`">{{ title }}</inertia-link> - <button @click.prevent="deletePost(uuid)">Delete</button>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import { InertiaLink, Inertia } from 'inertia-vue'
import Layout from '@/Shared/Layout'
import axios from 'axios'

export default {
    props: ['posts'],
    components: {
        Layout,
        InertiaLink
    },
    methods: {
        deletePost: function(uuid) {
            axios.delete(`/posts/${uuid}`)
                .then(() => {
                    Inertia.visit('/posts')
                })
                .catch(({ response }) => console.log(response))
        }
    }
}
</script>

<style>

</style>
