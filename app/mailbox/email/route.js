import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('email', params.email_id, {reload: true});
  }
});
