<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white bg-dark">
                        <form name="form" @submit.prevent="handleLogin">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Login</h4>
                                    <p>Welcome back, please login to your account.</p>
                                </div>
                                <vs-input
                                    v-validate="'required|min:4'"
                                    data-vv-validate-on="blur"
                                    name="username"
                                    icon="icon icon-user"
                                    icon-pack="feather"
                                    label-placeholder="User ID"
                                    v-model="user.username"
                                    class="w-full no-icon-border"/>
                                <span class="text-danger text-sm">{{ errors.first('username') }}</span>

                                <vs-input
                                    data-vv-validate-on="blur"
                                    v-validate="'required|min:6|max:30'"
                                    type="password"
                                    name="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    label-placeholder="Password"
                                    v-model="user.password"
                                    class="w-full mt-6 no-icon-border" />
                                <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                <div class="flex flex-wrap justify-between my-5">
                                    <!--<vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>-->
                                    <router-link to="/pages/forgot-password">Forgot Password?</router-link>
                                </div>
                                <vs-button  type="border" @click="registerUser">Register</vs-button>
                                <vs-button class="float-right" :disabled="!validateForm">Login</vs-button>
                                <div v-if="message" class="alert alert-danger" role="alert">{{ message }}</div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import User from '../../models/user';

export default {
    name: 'Login',
    data() {
        return {
            user: new User('', '', '', '', '', '', '', ''),
            loading: false,
            message: ''
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.userid != '' && this.password != '';
        },
        loggedIn() {
            return this.$store.state.initialState.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/');
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
                if(!isValid) {
                    this.loading = false;
                    return;
                }

                if (this.user.username && this.user.password) {
                    this.$store.dispatch('login', this.user).then(
                        () => {
                            this.$router.push('/');
                        },
                        error => {
                            this.loading = false;
                            this.message = 
                            (error.response && error.response.data) || error.message || error.toString();
                        }
                    );
                }
            });
        },

        registerUser() {
            this.$router.push('/pages/register');
        }
    }
}
</script>

<style lang="scss">
#page-login {
    .social-login {
        .bg-facebook {
          background-color: #1551b1;
        }
        .bg-twitter {
          background-color: #00aaff;
        }
        .bg-google {
          background-color: #1551b1;
        }
        .bg-github {
          background-color: #333;
        }
    }
}
</style>
