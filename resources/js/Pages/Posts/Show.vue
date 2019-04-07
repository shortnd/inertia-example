<template>
    <layout>
        <div class="container">
            <h1>{{ post.title }}</h1>
            <div>
                <inertia-link :href="`/posts/${post.uuid}/edit`">Edit</inertia-link>
            </div>
            <div>
                {{ post.body }}
            </div>
        </div>
    </layout>
</template>

<script>
import { InertiaLink, Inertia } from 'inertia-vue'
import Layout from '@/Shared/Layout'
import axios from 'axios'

export default {
    props: ['post'],
    data() {
        return {
        }
    },
    components: {
        Layout,
        InertiaLink
    },
    methods: {
    }
}
</script>

<style>

</style>
