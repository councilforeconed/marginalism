import Round from 'appkit/models/round';

export default Ember.ArrayController.extend({
  
  marginalCostOfLabor: 0.12,
  valuePerProduct: 0.02,
  activity: 0,
  
  canRemoveRound: function () {
    return this.get('content').length > 1;
  }.property('content.[]'),
  
  column2Title: function () {
    return [
      'Number of Gloves Produced',
      'Number of Trees Cut & Loaded per Day',
    ][this.get('activity')];
  }.property('activity'),
  
  column3Title: function () {
    return [
      'Marginal Product',
      'Number of Additional Trees Produced',
    ][this.get('activity')];
  }.property('activity'),
  
  column4Title: function () {
    return [
      'Value of Additional Gloves Produced',
      'Value of Additional Trees Produced',
    ][this.get('activity')];
  }.property('activity'),
  
  column5Title: function () {
    return [
      'Marginal Cost of Labor Per Minute',
      'Additional Labor Cost Per Day',
    ][this.get('activity')];
  }.property('activity'),
  
  changeMarginalProduct: function () {
    var defaultMarginalProducts = [0.12, 53];
    this.set('marginalCostOfLabor', defaultMarginalProducts[this.get('activity')]);
  }.observes('activity'),
  
  changeValuePerProduct: function () {
    var values = [0.02, 20];
    this.set('valuePerProduct', values[this.get('activity')]);
  }.observes('activity'),
  
  actions: {
    
    addRound: function () {
      var rounds = this.get('content');
      var previous = rounds[rounds.length - 1];
      var next = Round.create(previous.getProperties(
        'numberOfWorkers',
        'numberOfGlovesProduced'
      ));
      next.incrementProperty('numberOfWorkers');
      next.set('previousRound', previous);
      this.content.pushObject(next);
    },
    
    removeRound: function () {
      this.set('content', this.get('content').slice(0, -1));
    }
    
  }
  
});