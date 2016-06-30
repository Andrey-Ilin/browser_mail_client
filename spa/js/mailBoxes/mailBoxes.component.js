import template from './mailBoxes.html';
import modalTemplate from './myModalContent.html';



function controller($uibModal) {
    
    this.choseMailbox = (mailbox) => { 
        this.mailboxId = mailbox._id;
    };
    
    this.modalController = function ($scope, $uibModalInstance) {
        // $scope.ok = function () {
        //     $uibModalInstance.close(----data from form-----);
        // };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    };

    this.openModal = () => {
        $uibModal.open({
            template: modalTemplate,
            controller: this.modalController
        });
    };
}

export default {
    template,
    bindings: {
        mailboxes: '<'
    },
    controller
}
