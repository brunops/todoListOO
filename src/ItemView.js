function ItemView(opts) {
  opts = opts || {};
  this.model = opts.model ||
              (opts.text ? new Item({ text: opts.text }) : new Item());
  this.element = opts.element || 'div';
}

ItemView.prototype.render = function() {
  return '<' + this.element + '>' + 
           '<span>' + this.model.text + '</span>' + 
           '<input type="checkbox"' + (this.model.finished ? ' checked' : '') + ' />' +
         '</' + this.element + '>';
}
