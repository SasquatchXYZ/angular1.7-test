'use strict';

angular
  .module('tableView')
  .component('tableView', {
    templateUrl: 'table-view/table-view.template.html',
    controller: ['$http', function TableViewController($http) {
      const self = this;

      $http.get('addressbook/ab.xml')
        .then(function (res) {
          const document = xmlToJSON.parseString(res.data);

          self.addressbook = document.AddressBook[0].Contact;
        });
    }]
  });

