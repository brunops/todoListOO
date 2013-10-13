function TodoListView(opts) {
  var opts = opts || {};
  this.list = [];
  this.element = opts.element || 'div';
}

TodoListView.prototype.render = function() {
  return "<"  + this.element + ">" +
         "</" + this.element + ">";
};
