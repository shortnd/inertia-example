<template>
    <layout>
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label class="col-md-4 text-right" for="register-name">Name</label>
                        <div class="col-md-6">
                            <input type="text" v-model.trim="registerForm.name" id="register-name" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-4 text-right" for="register-email">Email</label>
                        <div class="col-md-6">
                            <input type="email" v-model.trim="registerForm.email" id="register-email" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="register-password" class="text-right col-md-4">Password</label>
                        <div class="col-md-6">
                            <input type="password" v-model.trim="registerForm.password" id="register-password" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="register-password-confirm" class="col-md-4 text-right">Confirm Password</label>
                        <div class="col-md-6">
                            <input type="password" v-model.trim="registerForm.password_confirmation" id="register-password-confirm" class="form-control">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-4 text-right">
                            <button @click.prevent="register" class="btn btn-primary">Register</button>
                        </div>
                    </div>

                    <div class="form-group r">
                        <div class="col-md-6 text-right">
                            Have an account <a href="#" @click.prevent="showLogin">Login</a>.
                        </div>
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
    components: {
        Layout
    },
    data () {
        return {
            registerForm: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    methods: {
        register() {
            axios.post('/register', this.registerForm)
            .then(({response}) => {
                Inertia.visit('/posts')
            }).catch(({response}) => {
                console.log(response.data.errors)
            })
            console.log(this.registerForm)
        },
        showLogin() {
            //
            Inertia.visit('/login')
        }
    }
}
</script>

<style>

</style>
