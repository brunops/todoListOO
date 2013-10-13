function TodoList(opts) {
  this.list = [];
}

TodoList.prototype.add = function(item) {
  this.list.push(item);
};

TodoList.prototype.first = function() {
  return this.list[0];
};

TodoList.prototype.remove = function(index) {
  this.list.splice(index, 1);
};

TodoList.prototype.size = function() {
  return this.list.length;
};
