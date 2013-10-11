describe('TodoList', function() {
  var todoList;

  beforeEach(function() { 
    todoList = new TodoList();
  });

  it("starts empty", function() {
    expect(todoList.list.length).toBe(0);
  });

  it(".add(item) adds new items to the collection", function() {
    todoList.add(new Item());
    expect(todoList.list.length).toBe(1);
  });
});
