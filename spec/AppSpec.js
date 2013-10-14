describe("App", function() {
  var ENTER = 13;
  var $todoList, $input;

  beforeEach(function() {
    $('body').append('<ul id="todo-list"></ul>');
    $('body').append('<input type="text" id="new-item" autofocus>');
    $('body').append('<script type="html/template" id="item"><li><input type="checkbox" <%= finished ? "checked" : "" %>><span><%- text %></span><button class="destroy"></button></li></script>');

    $todoList = $('#todo-list');
    $input = $('#new-item');

    new App();
  });

  afterEach(function() {
    $('#item').remove();
    $todoList.remove();
    $input.remove();
  });

  it("adds item with the content of input#new-todo to ul#todo-list when ENTER key is pressed", function() {
    $input.val('new todo');
    $input.focus();
    $input.trigger(jQuery.Event('keypress', { which: ENTER, keyCode: ENTER }));
    expect($todoList.find('li span').length).toBe(1);
    expect($todoList.find('li span').text()).toEqual('new todo');
  });

  it("does nothing when ENTER key is pressed and input is empty or contains only spaces", function() {
    $input.val('    ');
    $input.focus();
    $input.trigger(jQuery.Event('keypress', { which: ENTER, keyCode: ENTER }));
    expect($todoList.find('li span').length).toBe(0);
  });
});