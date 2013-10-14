function ItemView(opts) {
  opts = opts || {};
  this.model = opts.model ||
              (opts.text ? new Item({ text: opts.text }) : new Item());
}

ItemView.prototype.render = function() {
  return _.template($('#item').html(), { text: this.model.text, finished: this.model.finished });
};

