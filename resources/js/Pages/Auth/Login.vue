<template>
    <layout>
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <div v-if="errors" class="alert alert-danger">
                    <div v-for="(error, index) in errors" :key="index">
                        {{ error[0] }}
                    </div>
                </div>
                <form>
                    <div class="form-group row">
                        <label for="login-email" class="col-md-4 text-right">Email</label>
                        <div class="col-md-6">
                            <input type="email" v-model.trim="loginForm.email" id="login-email" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="login-password" class="col-md-4 text-right">Password</label>
                        <div class="col-md-6">
                            <input type="password" v-model.trim="loginForm.password" id="login-password" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-4 text-right">
                            <button @click.prevent="login" class="btn btn-primary">Login</button>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 text-right">
                            Don't have an account <a href="#" @click.prevent="showRegisterForm">Register</a> Here
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/Shared/Layout'
import axios from 'axios'
import { Inertia } from 'inertia-vue'

export default {
    components: {
        Layout
    },
    data() {
        return {
            errors: null,
            loginForm: {
                email: null,
                password: null,
            },
            register: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    methods: {
        login() {
            axios.post('/login', this.loginForm)
                .then((res) => {
                    Inertia.visit(res.request.responseURL)
                }).catch(({ response }) => {
                    this.errors = response.data.errors
                })
        },
        showRegisterForm () {
            Inertia.visit('/register')
        }
    }
}
</script>

<style>

</style>
