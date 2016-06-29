'use strict';


import router from './router.js';

import login from './login/login.component.js';
import commonPage from './commonPage/commonPage.component.js';
import mailBoxes from './mailBoxes/mailBoxes.component.js';
import letters from './letters/letters.component.js';
import contactList from './contactList/contactList.component.js';
import contactDetails from './contactDetails/contactDetails.component.js';
import dropDown from './dropDown/dropDown.component.js';
import avatar from './avatar/avatar.component.js';
import mailto from './mailto/mailto.component.js';
import error404 from './error404/error404.component.js';
import pushDb from './pushDB/pushDb.component';

import AuthService from './services/AuthService.js';
import DbService from './services/DbService';

const app = angular.module('mailApp', ['ui.router', 'restangular', 'ui.bootstrap', 'ngMessages']);

app.config(router);
app.config(function(RestangularProvider) {
    // RestangularProvider.setBaseUrl('https://test-api.javascript.ru/v1/imytropan');
    RestangularProvider.setBaseUrl('https://test-api.javascript.ru/v1/testandreylyin');
});

app.component('login', login);
app.component('commonPage', commonPage);
app.component('mailBoxes', mailBoxes);
app.component('letters', letters);
app.component('contactList', contactList);
app.component('contactDetails', contactDetails);
app.component('dropDown', dropDown);
app.component('avatar', avatar);
app.component('mailto', mailto);
app.component('error404', error404);
app.component('pushDb', pushDb);

app.service('AuthService', AuthService);
app.service('DbService', DbService);
