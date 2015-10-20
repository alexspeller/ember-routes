import DS from 'ember-data';
import Ember from 'ember';
const {attr} = DS;

export default DS.Model.extend({
  from: attr('string'),
  to: attr('string'),
  subject: attr('string'),
  body: attr('string'),
  mailbox: attr('string'),
  isDraft: Ember.computed.equal('mailbox', 'drafts')
});
