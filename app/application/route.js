import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('email');
  },

  renderTemplate() {
    this._super(...arguments);
    this.render("application/toolbar", {
      into:   'application',
      outlet: 'toolbar'
    });
  }

});
