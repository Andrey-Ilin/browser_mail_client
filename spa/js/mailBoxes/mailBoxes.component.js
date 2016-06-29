import template from './mailBoxes.html';

function controller($scope) {
    
    this.choseMailbox = (mailbox) => { 
        this.mailboxId = mailbox._id;
    };
}

export default {
    template,
    bindings: {
        mailboxes: '<'
    },
    controller
}
