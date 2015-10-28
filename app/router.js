import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('mailbox', {path: "/:mailbox_id"}, function() {
    this.route('email', {path: "/emails/:email_id"});
  });
});

export default Router;
