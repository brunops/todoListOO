describe('ItemView', function() {
  var item, itemView, todoList;


  beforeEach(function() {
    item = new Item({ text: 'Walk the dog' });
    itemView = new ItemView({ model: item });
    todoList = $('<ul id="todo-list"></ul>');

    // define ItemView template
    $('body').append('<script type="html/template" id="item"><li><input type="checkbox" <%= finished ? "checked" : "" %>><span><%- text %></span><button class="destroy"></button></li></script>');
    // create TodoList
    $('body').append(todoList);
  });

  afterEach(function() {
    $('#item').remove();
    $('#todo-list').remove();
  });

  it("is associated with one model", function() {
    expect(itemView.model).toBe(item);
  });

  it("is associated with a new empty model if no model is given", function() {
    expect((new ItemView()).model).toEqual(jasmine.any(Item));
  });

  it(".renderRaw() method contains model text", function() {
    expect(itemView.renderRaw()).toMatch(new RegExp(item.text));
  });

  it(".renderRaw() returns a checkbox indicating whether the task is completed", function() {
    expect(itemView.renderRaw()).toMatch(/<input type="checkbox"/);
    expect(itemView.renderRaw()).not.toMatch(/checked/);
    item.finish();
    expect(itemView.renderRaw()).toMatch(/checked/);
  });

  it("checking/unchecking todo item status updates its model finished status", function() {
    todoList.append(itemView.render());
    todoList.find('input').attr('checked', 'checked').trigger('change');
    expect(itemView.model.finished).toBeTruthy();
  });
  
  it("checking/unchecking todo item status updates only its model even when multiple items exist", function() {
    var itemView2 = new ItemView();
    todoList.append(itemView.render());
    todoList.append(itemView2.render());
    todoList.find('input').eq(1).attr('checked', 'checked').trigger('change');
    expect(itemView.model.finished).toBeFalsy();
    expect(itemView2.model.finished).toBeTruthy();
  });
});

