import Ember from 'ember';

export default Ember.Controller.extend({
  addPerson() {
    const contact = {
      first: this.first,
      last: this.last,
      address: this.address,
      phone: this.phone,
    };
    fetch(`https://tiny-tn.herokuapp.com/collections/cb-people`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(contact)
    }).then((res) => res.json())
    .then((person) => {
      this.clearForm();
    });
  },

  clearForm() {
    this.set(`first`, ``);
    this.set(`last`, ``);
    this.set(`address`, ``);
    this.set(`phone`, ``);
  },

});
