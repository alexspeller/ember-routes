import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('mailbox/email/edit/attach', {
      into:   'application',
      outlet: 'modal'
    });
  },

  actions: {
    closeModal() {
      this.transitionTo('mailbox.email.edit');
    }
  }
});
