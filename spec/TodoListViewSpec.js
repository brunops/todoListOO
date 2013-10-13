describe('TodoListView', function() {
  var todoListView;

  beforeEach(function() {
    todoListView = new TodoListView();
  });

  it("starts empty", function() {
    expect(todoListView.list.length).toBe(0);
  });

  it("has an HTML element associated with it", function() {
    expect((new TodoListView({ element: 'section' })).element).toBe('section');
  });
  
  it("has a div HTML element wrapper by default", function() {
    expect(todoListView.element).toBe('div'); 
  });

  it(".render() renders an empty HTML if TodoList is empty", function() {
    expect(todoListView.render()).toMatch(new RegExp(todoListView.element + "><\/" + todoListView.element));
  });

  it(".add(itemView) adds itemView element to the list", function() {
    todoListView.add(new ItemView);
    expect(todoListView.list.length).toBe(1);
  });

  it(".add() adds a new empty ItemView to the list", function() {
    todoListView.add();
    expect(todoListView.list[0]).toEqual(jasmine.any(ItemView));
  });

  it(".remove(index) removes item with the specified index", function() {
    todoListView.add(new ItemView({ text: 'pizza' }));
    todoListView.add();
    todoListView.remove(1);
    expect(todoListView.list[0].render()).toMatch(/pizza/);
  });
});
