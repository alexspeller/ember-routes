import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.filter('email', (email) =>
      email.get('mailbox') === params.mailbox_id
    );
  }
});
