'use strict';
import template from './letters.html';

function controller($filter, $scope) {
    "ngInject";
    
    this.letters = $filter('filter')(this.letters, this.mailboxId);

    console.dir($scope.$parent.mailboxId);
}

export default {
    template,
    bindings: {
        letters: '<'
    },
    controller
}
