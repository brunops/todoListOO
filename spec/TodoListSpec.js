describe('TodoList', function() {
  var todoList;

  beforeEach(function() { 
    todoList = new TodoList();
  });

  it(".size() returns total of items", function() {
    expect(todoList.size()).toBe(0);
  });

  it(".add() add new empty Item to the collection", function() {
    todoList.add();
    expect(todoList.size()).toBe(1);
  });

  it(".add(item) adds new items to the collection", function() {
    todoList.add(new Item());
    expect(todoList.list.length).toBe(1);
  });

  it(".add(item) works with multiple items", function() {
    todoList.add(new Item());
    todoList.add(new Item());
    todoList.add(new Item());
    expect(todoList.list.length).toBe(3);
  });

  it(".first() returns first list element", function() {
    todoList.add(new Item({ text: 'First added item' }));
    todoList.add(new Item());
    expect(todoList.first().text).toMatch(/First/);
  });

  it(".remove(index) removes item with the specified index", function() {
    todoList.add(new Item());
    todoList.add(new Item({ text: 'sup, bro' }));
    todoList.remove(0);
    expect(todoList.first().text).toBe('sup, bro');
  });
});

