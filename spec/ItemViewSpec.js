describe('ItemView', function() {
  var item, itemView;


  beforeEach(function() {
    item = new Item({ text: 'Walk the dog' });
    itemView = new ItemView({ model: item });

    $('body').append('<script type="html/template" id="item"><li><input type="checkbox" <%= finished ? "checked" : "" %>><span><%- text %></span><button class="destroy"></button></li></script>');
  });

  afterEach(function() {
    $('#item').remove();
  });

  it("is associated with one model", function() {
    expect(itemView.model).toBe(item);
  });

  it("is associated with a new empty model if no model is given", function() {
    expect((new ItemView()).model).toEqual(jasmine.any(Item));
  });

  it(".render() method contains model text", function() {
    expect(itemView.render()).toMatch(new RegExp(item.text));
  });

  it(".render() returns a checkbox indicating whether the task is completed", function() {
    expect(itemView.render()).toMatch(/<input type="checkbox"/);
    expect(itemView.render()).not.toMatch(/checked/);
    item.finish();
    expect(itemView.render()).toMatch(/checked/);
  });
});

