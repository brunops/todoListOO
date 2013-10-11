function ItemView(opts) {
  opts = opts || {};
  this.model = opts.model || new Item();
  this.element = opts.element || 'div';
}

ItemView.prototype.render = function() {
  return '<' + this.element + '>' + this.model.text + '</' + this.element + '>';
}
