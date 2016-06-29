'use strict';

export default function ($urlRouterProvider, $transitionsProvider, $stateProvider) {
    "ngInject";

    $urlRouterProvider.when('', '/login');
    $urlRouterProvider.when('/common', '/common/mail/letters');
    $urlRouterProvider.when('/common/mail', '/common/mail/letters');
    $urlRouterProvider.otherwise('404');

    $transitionsProvider.onBefore({
        to: state => !!state.abstract
    }, ($transition$, $state) => {
        "ngInject";
        if (angular.isString($transition$.to().abstract)) {
            return $state.target($transition$.to().abstract);
        }
    });
    $transitionsProvider.onStart({to: state => state.requiresAuth}, function (AuthService, $state) {
        "ngInject";

        if (!AuthService.checkAuth) {
            return $state.target("login");
        }
    });


    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>',
            requiresAuth: false
        })
        .state('common', {
            url: '/common',
            abstract: 'mail',
            template: '<common-page mailboxId="mailboxId"></common-page>',
            requiresAuth: true
        })
        .state('mail', {
            url: '/mail',
            parent: 'common',
            abstract: 'letters',
            template: '<mail-boxes mailboxes="mailboxes"></mail-boxes>',
            requiresAuth: true,
            resolve: {
                mailboxes: (Restangular) => {
                    "ngInject";
          
                    return Restangular.all('mailboxes').getList();
                }
            },
            controller: function ($scope, mailboxes) {
                $scope.mailboxes = mailboxes;
            }
        })
        .state('letters', {
            url: '/letters',
            parent: 'mail',
            template: '<letters letters="letters"></letters>',
            requiresAuth: true,
            resolve: {
                letters: (Restangular) => {
                    "ngInject";

                    return Restangular.all('letters').getList();
                }
            },
            controller: function ($scope, letters) {
                $scope.letters = letters;

            }
        })
        .state('contacts', {
            url: '/contacts',
            parent: 'common',
            template: '<contact-list contacts="contacts"></contact-list>',
            requiresAuth: true,
            resolve: {
                contacts: (Restangular) => {
                    "ngInject";
                    
                    return Restangular.all('users').getList();
                }
            },
            controller: function ($scope, contacts) {
                $scope.contacts = contacts;
            }
        })
        .state('contact', {
            url: '/contacts/:id',
            parent: 'common',
            template: '<contact-details contact="contact"></contact-details>',
            requiresAuth: true,
            resolve: {
                contact: (Restangular, $stateParams) => {
                    "ngInject";
                    return Restangular.one('users', $stateParams.id).get();
                }
            },
            controller: function ($scope, contact) {
                $scope.contact = contact;
            }
        })
        .state('404', {
            url: '/404',
            template: '<error-404></error-404>',
            requiresAuth: false
        })
}
