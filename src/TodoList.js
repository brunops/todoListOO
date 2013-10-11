function TodoList(opts) {
  this.list = [];
}

TodoList.prototype.add = function(item) {
  this.list.push(item);
};

TodoList.prototype.first = function() {
  return this.list[0];
};

