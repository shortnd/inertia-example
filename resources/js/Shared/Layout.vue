<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <inertia-link href="/" class="navbar-brand">Home</inertia-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    data-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <inertia-link class="nav-link" href="/about">About</inertia-link>
                        </li>
                        <li class="nav-item">
                            <inertia-link class="nav-link" href="/contact">Contact</inertia-link>
                        </li>
                        <li class="nav-item" v-if="userLoggedIn">
                            <inertia-link class="nav-link" href="/posts">Posts</inertia-link>
                        </li>
                    </ul>
                    <ul v-if="userLoggedIn" class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ userEmail }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a href="#" @click.prevent="logout" class="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <ul v-else class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <inertia-link class="nav-link" href="/login">Login</inertia-link>
                        </li>
                        <li class="nav-item">
                            <inertia-link class="nav-link" href="/register">Register</inertia-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4 container">
            <slot/>
        </main>
    </div>
</template>

<script>
import { InertiaLink, Inertia } from 'inertia-vue'
import axios from 'axios'

export default {
    components: {
        InertiaLink,
    },
    inject: ['page'],
    data () {
        return {
            //
        }
    },
    methods: {
        logout() {
            axios.post('/logout')
                .then(({response}) => Inertia.visit('/'))
                .catch((e) => console.log(e))
        }
    },
    computed: {
        userLoggedIn() {
            return !! this.page.props.auth.user
        },
        userEmail() {
            return this.page.props.auth.user.email
        }
    }
}
</script>
