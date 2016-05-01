import Ember from 'ember';

export default Ember.Controller.extend({

  addBookmark() {
  const attributes = {
    website: this.website,
    nickname: this.nickname,
  };

    fetch(`https://tiny-tn.herokuapp.com/collections/cb-bookmarks`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((bookmark) => {
      this.clearInputs();
      this.showBookmarks(bookmark);
    });
  },

  clearInputs() {
    this.set(`website`, ``);
    this.set(`nickname`, ``);
  },

  showBookmarks(bookmark) {
    this.set(`model`, [bookmark, ...this.model]);
  },
});
