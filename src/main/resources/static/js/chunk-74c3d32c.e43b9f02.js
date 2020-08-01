(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74c3d32c"],{1880:function(e,s,a){e.exports=a.p+"img/register.cfd9ef09.jpg"},8654:function(e,s,a){"use strict";a.d(s,"a",(function(){return l}));var t=a("d225"),l=function e(s,a,l,r,i,n,o,d){Object(t["a"])(this,e),this.username=s,this.password=a,this.email=l,this.last_name=r,this.first_name=i,this.phone=n,this.gender=o,this.language=d}},aaf8:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"h-screen flex w-full bg-img"},[t("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[t("vx-card",[t("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[t("img",{staticClass:"mx-auto",attrs:{src:a("1880"),alt:"register"}})]),t("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white bg-dark"},[t("div",{staticClass:"p-8"},[t("form",{attrs:{name:"form"},on:{submit:function(s){return s.preventDefault(),e.handleRegister(s)}}},[t("div",{staticClass:"vx-card__title"},[t("h4",{staticClass:"mb-4"},[e._v("Create Account")]),t("p",[e._v("Fill the below form to create a new account.")])]),t("div",{staticClass:"clearfix"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:4",expression:"'required|min:4'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Username",name:"username",placeholder:"Username"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}}),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("username")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:30",expression:"'required|min:6|max:30'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:30|confirmed:password",expression:"'min:6|max:30|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(s){e.confirm_password=s},expression:"confirm_password"}}),t("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"email",expression:"'email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),t("vs-input",{staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"last_name","label-placeholder":"Last Name",placeholder:"Last Name"},model:{value:e.user.last_name,callback:function(s){e.$set(e.user,"last_name",s)},expression:"user.last_name"}}),t("vs-input",{staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"first_name","label-placeholder":"First Name",placeholder:"First Name"},model:{value:e.user.first_name,callback:function(s){e.$set(e.user,"first_name",s)},expression:"user.first_name"}}),t("vs-input",{staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"phone","label-placeholder":"Phone",placeholder:"Phone"},model:{value:e.user.phone,callback:function(s){e.$set(e.user,"phone",s)},expression:"user.phone"}}),t("vs-input",{staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"gender","label-placeholder":"Gender",placeholder:"Gender"},model:{value:e.user.gender,callback:function(s){e.$set(e.user,"gender",s)},expression:"user.gender"}}),t("vs-input",{staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"language","label-placeholder":"Language",placeholder:"Language"},model:{value:e.user.language,callback:function(s){e.$set(e.user,"language",s)},expression:"user.language"}}),t("vs-checkbox",{staticClass:"mt-6",model:{value:e.isTermsConditionAccepted,callback:function(s){e.isTermsConditionAccepted=s},expression:"isTermsConditionAccepted"}},[e._v("I accept the terms & conditions.")]),t("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[e._v("Login")]),t("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!e.validateForm}},[e._v("Register")]),e.message?t("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()],1)])])])])])])],1)])},l=[],r=(a("6b54"),a("8654")),i={name:"Register",data:function(){return{user:new r["a"]("","","","","","","",""),submitted:!1,successful:!1,message:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{loggedIn:function(){return this.$store.state.initialState.status.loggedIn},validateForm:function(){return!this.errors.any()&&""!=this.username&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},mounted:function(){this.loggedIn&&this.$router.push("/")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(s){s&&e.$store.dispatch("register",e.user).then((function(s){e.message=s.message,e.successful=!0}),(function(s){e.message=s.response&&s.response.data||s.message||s.toString(),e.successful=!1}))}))}}},n=i,o=a("2877"),d=Object(o["a"])(n,t,l,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-74c3d32c.e43b9f02.js.map