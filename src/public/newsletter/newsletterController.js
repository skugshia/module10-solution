(function(){
  "use strict";

  angular.module('public')
    .controller('newsletterController', newsletterController);

  newsletterController.$inject = ['MenuService', 'FormDataService'];
  function newsletterController (MenuService, FormDataService) {

    var $ctrl = this;
    $ctrl.newsletter = {};
    $ctrl.itemFound = null;

    $ctrl.submit = function () {
      var serviceItemPromise = MenuService.getMenuItemById($ctrl.newsletter.menunumber);
      serviceItemPromise.then(function (response) {
        $ctrl.itemFound = true;
        $ctrl.newsletter.registered = true;
        $ctrl.newsletter.favoriteDish = response;
  
        FormDataService.updateFormDataStorage($ctrl.newsletter);

      }).catch(function (error) {
        $ctrl.itemFound = false;
        $ctrl.newsletter.registered = false;
      });
    }
  }
})()