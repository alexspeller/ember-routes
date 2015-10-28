import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this._super(...arguments);
    this.render("mailbox/email/edit/toolbar", {
      into:   'application',
      outlet: 'toolbar'
    });
  }
});
