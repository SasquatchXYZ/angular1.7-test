'use strict';

angular
  .module('cardsView')
  .component('cardsView', {
    templateUrl: 'cards-view/cards-view.template.html',
    controller: ['$http', function CardsViewController($http) {
      const self = this;

      $http.get('addressbook/ab.xml')
        .then(res => {
          const xmlDoc = xmlToJSON.parseString(res.data);

          self.addressbook = xmlDoc.AddressBook[0].Contact;
        });
    }]
  });
