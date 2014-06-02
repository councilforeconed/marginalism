export default Ember.Component.extend({
  
  classNames: 'sixteen columns round'.w(),
  
  workers: null,
  gloves: null,
  previousWorkers: null,
  previousGloves: null,
  
  marginalProduct: function () {
    return this.get('gloves') - this.get('previousGloves');
  }.property('gloves', 'previousGloves'),
  
  valueProduced: function () {
    return this.get('marginalProduct') * this.get('valuePerProduct');
  }.property('marginalProduct', 'valuePerGlove')
  
});