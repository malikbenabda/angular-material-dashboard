(function(){

  angular
       .module('app')
       .controller('MainController', [
          'navService','tableService', '$log', '$q', '$state', '$mdToast',
          MainController
       ]);

  function MainController(navService,tableService, $log, $q, $state) {
    var vm = this;

    vm.menuItems = [ ];
    vm.tableData = [ ];
    vm.title = $state.current.data.title;

    navService
        .loadAllItems()
        .then(function(menuItems) {
          vm.menuItems = [].concat(menuItems);
        });


    tableService
        .loadAllItems()
        .then(function(tableData) {
          vm.tableData = [].concat(tableData);
        });


  }

})();
