import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logged-in', {path: '/'}, function () {
    // all logged in routes nested under here
    this.route('mailbox', {path: "/:mailbox_id", resetNamespace: true}, function() {
      this.route('email', {path: "/emails/:email_id"}, function() {
        this.route('edit', function() {
          this.route('attach');
        })
      });
    });

  });

  this.route('sign-in');
});

export default Router;
