import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  from: faker.internet.email,
  to: faker.internet.email,
  subject: faker.company.catchPhrase,
  body: faker.company.bs,
  mailbox: faker.list.random('inbox', 'drafts', 'sent')
});
