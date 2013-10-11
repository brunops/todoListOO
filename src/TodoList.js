function TodoList(opts) {
  this.list = [];
}

TodoList.prototype.add = function(item) {
  this.list.push(item);
};

