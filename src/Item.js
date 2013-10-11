function Item(opts) {
  this.text = opts.text || '';
  this.finished = opts.finished || false;
}

Item.prototype.finish = function() {
  this.finished = true;
};
