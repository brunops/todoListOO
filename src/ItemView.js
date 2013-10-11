function ItemView(opts) {
  opts = opts || {};
  this.model = opts.model || new Item();
  this.element = opts.element || 'div';
}

ItemView.prototype.render = function() {
  return '<' + this.element + '>' + 
           '<span>' + this.model.text + '</span>' + 
           '<input type="checkbox"' + (this.model.finished ? ' checked' : '') + ' />' +
         '</' + this.element + '>';
}
