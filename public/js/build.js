!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="./public/",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(2),i=n(o),s=r(4),l=n(s),a=angular.module("mailApp",["ui.router"]);a.run(["$transitions",function(t){"ngInject";t.onStart({to:"secret"},["AuthService","$state",function(t,e){if(!t.checkAuth())return alert("Wrong Login or password!"),e.target("login")}])}]),a.config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("login"),e.when("","/login/"),t.state("login",{url:"/login/",template:"<login></login>"}).state("secret",{url:"/secret/",template:"secret"})}]),a.component("login",i["default"]),a.service("AuthService",l["default"])},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(3),i=n(o);e["default"]={template:i["default"],controller:["$state","AuthService",function(t,e){"ngInject";var r=this;this.login="",this.password="",this.go=function(){e.signIn(r.login,r.password),t.go("secret")}}]}},function(t,e){t.exports='<form class=form-signin ng-submit=$ctrl.go() novalidate> <h2 class=form-signin-heading>Please sign in</h2> <label for=inputEmail class=sr-only>Email address</label> <input type=email id=inputEmail class=form-control placeholder="Email address" required="" autofocus="" ng-model=$ctrl.login> <label for=inputPassword class=sr-only>Password</label> <input type=password id=inputPassword class=form-control placeholder=Password required="" ng-model=$ctrl.password> <div class=checkbox> <label> <input type=checkbox value=remember-me> Remember me </label> </div> <button class="btn btn-lg btn-primary btn-block" type=submit>Sign in</button> </form>'},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var t=this;this.rightParams={login:"123@i",password:"456"},this.isAuthorized=!1,this.signIn=function(e,r){t.isAuthorized=e===t.rightParams.login&&r===t.rightParams.password},this.checkAuth=function(){return t.isAuthorized}}}]);
//# sourceMappingURL=build.js.map