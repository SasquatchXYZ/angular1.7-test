'use strict';

angular
  .module('tableView')
  .component('tableView', {
    templateUrl: 'table-view/table-view.template.html',
    controller: ['$http', function TableViewController($http) {
      const self = this;
      self.message = 'hello tables...';

      $http.get('addressbook/ab.xml')
        .then(function (res) {

          const document = xmlToJSON.parseString(res.data);
          /*const parser = new DOMParser();
          const xmlAB = parser.parseFromString(res.data, 'text/xml');*/
          self.addressbook = document.AddressBook[0].Contact;
          console.log(self.addressbook);

        });
    }]
  });

