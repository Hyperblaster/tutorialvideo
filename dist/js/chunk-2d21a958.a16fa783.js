(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a958"],{bbac:function(r,e,a){"use strict";a.r(e);var t=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("page",{attrs:{center:""}},[a("v-container",{staticStyle:{"min-width":"320px"}},[a("wrapper",[r.loading?a("constrain",{staticClass:"text-xs-center",attrs:{xs:""}},[a("p",{staticClass:"lead"},[r._v("Processing...")]),a("v-progress-circular",{attrs:{indeterminate:""}})],1):r._e(),r.loading?r._e():a("constrain",{attrs:{sm:""}},[a("h1",[r._v("Update your details")]),a("p",[r._v("Hi "+r._s(r.details.firstName)+", you can update your password and details below")]),a("form",{on:{submit:function(e){return e.preventDefault(),r.submit(e)}}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"pr-4":"","d-flex":"","align-center":"",xs12:"",sm6:""}},[a("v-text-field",{attrs:{outline:"","error-messages":r.firstNameErrors,required:"",label:"First Name"},on:{blur:function(e){return r.$v.firstName.$touch()}},model:{value:r.firstName,callback:function(e){r.firstName=e},expression:"firstName"}})],1),a("v-flex",{attrs:{"d-flex":"","align-center":"",xs12:"",sm6:""}},[a("v-text-field",{attrs:{outline:"","error-messages":r.lastNameErrors,required:"",label:"Last Name"},on:{blur:function(e){return r.$v.lastName.$touch()}},model:{value:r.lastName,callback:function(e){r.lastName=e},expression:"lastName"}})],1)],1),a("v-text-field",{attrs:{outline:"",type:"password","error-messages":r.passwordErrors,label:"Set a new password",required:""},on:{input:function(e){return r.$v.password.$touch()},blur:function(e){return r.$v.password.$touch()}},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}}),a("v-text-field",{attrs:{outline:"",type:"password","error-messages":r.confirmErrors,label:"Confirm your new password",required:""},on:{input:function(e){return r.$v.confirmPassword.$touch()},blur:function(e){return r.$v.confirmPassword.$touch()}},model:{value:r.confirmPassword,callback:function(e){r.confirmPassword=e},expression:"confirmPassword"}}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"","align-center":"",xs12:"",sm5:""}},[a("v-btn",{attrs:{block:"",large:"",color:"primary",disabled:r.$v.$invalid,type:"submit"}},[r._v("Save changes")])],1)],1)],1)])],1)],1)],1)},s=[],i=(a("a481"),a("2ef0"),a("f217")),o=a("6cd4"),n=a("1dce"),l=a("b5ae"),u=a("1688"),d={props:["token"],validations:{firstName:{required:l["required"],minLength:Object(l["minLength"])(3)},lastName:{required:l["required"],minLength:Object(l["minLength"])(4)},email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},confirmPassword:{required:l["required"],minLength:Object(l["minLength"])(6),isMatch:function(){return this.$v.password.$model==this.$v.confirmPassword.$model}}},mixins:[i["a"],n["validationMixin"],o["a"],u["e"]],data:function(){return{details:null,loading:!0,firstName:"",lastName:"",email:"",password:"",confirmPassword:""}},created:function(){var r=this,e=this.application&&"application"==this.application.authenticationStyle;r.$fluro.auth.retrieveUserFromResetToken(r.token,{application:e}).then(function(e){r.details=e,r.firstName=e.firstName,r.lastName=e.lastName,r.email=e.username||e.email,r.lastName=e.lastName,r.loading=!1}).catch(function(e){var a=r.$fluro.utils.errorMessage(e);r.$fluro.notify(a,{duration:5500,type:"error"}),r.$router.replace({name:"home"})})},computed:{emailErrors:function(){var r=[];return this.$v.email.$dirty?(this.$v.email.email||r.push("Must be valid email address"),this.$v.email.required||r.push("Email is required"),r):r},passwordErrors:function(){var r=[];return this.$v.password.$dirty?(this.$v.password.required||r.push("Please type your password"),r):r},confirmErrors:function(){var r=[];return this.$v.confirmPassword.$dirty?(this.$v.confirmPassword.required||r.push("Please confirm your password"),this.$v.confirmPassword.isMatch||r.push("Your passwords do not match"),r):r},firstNameErrors:function(){var r=[];return this.$v.firstName.$dirty?(this.$v.firstName.required||r.push("Please type your first name"),r):r},lastNameErrors:function(){var r=[];return this.$v.lastName.$dirty?(this.$v.lastName.required||r.push("Please type your last name"),r):r}},methods:{submit:function(){var r=this;r.loading=!0;var e={username:r.email,firstName:r.firstName,lastName:r.lastName,password:r.password,confirmPassword:r.confirmPassword},a=this.application&&"application"==this.application.authenticationStyle;r.$fluro.auth.updateUserWithToken(r.token,e,{application:a}).then(function(e){console.log("Were good!"),r.loading=!1,r.$fluro.notify("Changes saved!",{duration:3500,type:"success"}),r.$router.replace({name:"home"})}).catch(function(e){var a=r.$fluro.utils.errorMessage(e);r.$fluro.notify(a,{duration:3500,type:"error"}),console.log("Error",a,e),r.loading=!1})}}},c=d,m=a("2877"),f=a("6544"),p=a.n(f),h=a("8336"),v=a("a523"),w=a("0e8f"),$=a("a722"),g=a("490a"),N=a("2677"),y=Object(m["a"])(c,t,s,!1,null,null,null);e["default"]=y.exports;p()(y,{VBtn:h["a"],VContainer:v["a"],VFlex:w["a"],VLayout:$["a"],VProgressCircular:g["a"],VTextField:N["a"]})}}]);
//# sourceMappingURL=chunk-2d21a958.a16fa783.js.map