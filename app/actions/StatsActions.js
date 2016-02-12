'use strict';

import alt from '../alt';

class StatsActions {
  constructor() {
    this.generateActions(
      'getStatsSucess',
      'getStatsFail'
    );
  }

  getStats() {
    $.ajax({url: '/api/stats'})
      .done((data) => {
        this.actions.getStatsSucess(data);
      })
      .fail((jqXhr) => {
        this.actions.getStatsFail(jqXhr);
      });
  }
}

export default alt.createActions(StatsActions);
