<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white bg-dark">
                            <div class="p-8">
                            <form name="form" @submit.prevent="handleRegister">
                                <div class="vx-card__title">
                                    <h4 class="mb-4">Create Account</h4>
                                    <p>Fill the below form to create a new account.</p>
                                </div>
                                <div class="clearfix">
                                    <vs-input
                                        v-validate="'required|min:4'"
                                        data-vv-validate-on="blur"
                                        label-placeholder="Username"
                                        name="username"
                                        placeholder="Username"
                                        v-model="user.username"
                                        class="w-full" />
                                    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

                                    <vs-input
                                        ref="password"
                                        type="password"
                                        data-vv-validate-on="blur"
                                        v-validate="'required|min:6|max:30'"
                                        name="password"
                                        label-placeholder="Password"
                                        placeholder="Password"
                                        v-model="user.password"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                    <vs-input
                                        type="password"
                                        v-validate="'min:6|max:30|confirmed:password'"
                                        data-vv-validate-on="blur"
                                        data-vv-as="password"
                                        name="confirm_password"
                                        label-placeholder="Confirm Password"
                                        placeholder="Confirm Password"
                                        v-model="confirm_password"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

                                    <vs-input
                                        v-validate="'email'"
                                        data-vv-validate-on="blur"
                                        name="email"
                                        type="email"
                                        label-placeholder="Email"
                                        placeholder="Email"
                                        v-model="user.email"
                                        class="w-full mt-6" />

                                    <vs-input
                                        data-vv-validate-on="blur"
                                        name="last_name"
                                        label-placeholder="Last Name"
                                        placeholder="Last Name"
                                        v-model="user.last_name"
                                        class="w-full mt-6" />

                                    <vs-input
                                        data-vv-validate-on="blur"
                                        name="first_name"
                                        label-placeholder="First Name"
                                        placeholder="First Name"
                                        v-model="user.first_name"
                                        class="w-full mt-6" />

                                    <vs-input
                                        data-vv-validate-on="blur"
                                        name="phone"
                                        label-placeholder="Phone"
                                        placeholder="Phone"
                                        v-model="user.phone"
                                        class="w-full mt-6" />

                                    <vs-input
                                        data-vv-validate-on="blur"
                                        name="gender"
                                        label-placeholder="Gender"
                                        placeholder="Gender"
                                        v-model="user.gender"
                                        class="w-full mt-6" />

                                    <vs-input
                                        data-vv-validate-on="blur"
                                        name="language"
                                        label-placeholder="Language"
                                        placeholder="Language"
                                        v-model="user.language"
                                        class="w-full mt-6" />

                                    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox>
                                    <vs-button  type="border" to="/pages/login" class="mt-6">Login</vs-button>
                                    <vs-button class="float-right mt-6" :disabled="!validateForm">Register</vs-button>
                                    <div v-if="message" class="alert" :class="successful ? 'alert-success': 'alert-danger'">{{ message }}</div>
                                </div>
                            </form>
                            </div>
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
  name: 'Register',
  data() {
    return {
      user: new User('', '', '', '', '', '', '', ''),
      submitted: false,
      successful: false,
      message: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.initialState.status.loggedIn;
    },
    validateForm() {
        return !this.errors.any() && this.username != '' && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script>
