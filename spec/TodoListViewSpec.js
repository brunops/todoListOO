describe('TodoListView', function() {
  var todoListView;

  beforeEach(function() {
    todoListView = new TodoListView();
  });


  it("starts empty", function() {
    expect(todoListView.list.length).toBe(0);
  });
});
