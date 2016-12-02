import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      setTimeout(() => { resolve(); }, 3000);
    });
  }
});
