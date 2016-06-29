'use strict';
import template from "./commonPage.html";

function controller (AuthService, $state, $scope) {
    "ngInject";
    
    let user = AuthService.authUser;

    this.userName = user.userName;
    this.photoUrl = user.photo;

    this.signOut = () => {
        AuthService.signOut();
        $state.go('login');
    };
}

export default {
    template,
    controller
}
