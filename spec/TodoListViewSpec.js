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
});
