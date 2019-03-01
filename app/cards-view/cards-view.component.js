'use strict';

angular
  .module('cardsView')
  .component('cardsView', {
    templateUrl: 'cards-view/cards-view.template.html',
    controller: function CardsViewController() {
      this.message = 'hello cards...';
    }
  });
