function ItemView(opts) {
  opts = opts || {};
  this.model = opts.model || new Item();
  this.element = opts.element || 'div';
}

