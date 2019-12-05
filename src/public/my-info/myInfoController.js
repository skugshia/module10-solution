(function(){
  "use strict";

  angular
    .module('public')
    .controller('myInfoController', myInfoController);

  myInfoController.$inject = ['myInfo', 'ApiPath'];
  function myInfoController(myInfo, ApiPath) {

    var $ctrl = this;
    $ctrl.basePath = ApiPath;

  
    $ctrl.newsletterFormData = myInfo;

    
    if($ctrl.newsletterFormData.hasOwnProperty("registered")){
      $ctrl.showInfo = true;
    } else {
      $ctrl.showInfo = false;
    }
  }

})();