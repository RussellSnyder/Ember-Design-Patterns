import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('user', { 
      firstName: "John",
      lastName: "Doe",
      password: "123456"
    });   
  }
});