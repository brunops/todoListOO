function TodoListView(opts) {
  var opts = opts || {};
  this.list = [];
  this.element = opts.element || 'div';
}

TodoListView.prototype.add = function(itemView) {
  itemView = itemView || new ItemView();
  this.list.push(itemView);
};

TodoListView.prototype.remove = function(index) {
  this.list.splice(index, 1);
};

TodoListView.prototype.render = function() {
  var output = '';
  output += "<"  + this.element + ">";
  
  for (var i = 0; i < this.list.length; ++i) {
    output += this.list[i].render();
  }

  output += "</" + this.element + ">";
  return output;
};

