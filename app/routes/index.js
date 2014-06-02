import Round from 'appkit/models/round';

export default Ember.Route.extend({
  
  model: function () {
    return [Round.create({ numberOfWorkers: 1 })];
  }
  
});