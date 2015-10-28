import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this._super(...arguments);
    this.render("application/toolbar", {
      into:   'logged-in',
      outlet: 'toolbar'
    });
  }
});
