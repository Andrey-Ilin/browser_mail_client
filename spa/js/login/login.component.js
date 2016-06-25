'use strict';
import template from "./login.html";

function controller ($state, AuthService) {
    "ngInject";

    this.login = '';
    this.password = '';

    this.signIn = () => {
        AuthService.signIn(this.login, this.password);

        $state.go('common');
    }
}

export default {
    template,
    controller
}