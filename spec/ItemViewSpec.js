describe('ItemView', function() {
  var item, itemView;

  beforeEach(function() {
    item = new Item({ text: 'Walk the dog' });
    itemView = new ItemView({ model: item });
  });

  it("is associated with one model", function() {
    expect(itemView.model).toBe(item);
  });

  it("is associated with a new empty model if no model is given", function() {
    expect((new ItemView()).model).toEqual(jasmine.any(Item));
  });

  it("has an HTML element associated", function() {
    expect((new ItemView({ element: 'li' })).element).toEqual('li');
  });

  it("defaults to div element if nothing is passed", function() {
    expect((new ItemView).element).toEqual('div');
  });

  it(".render() method contains model text", function() {
    expect(itemView.render()).toMatch(new RegExp(item.text));
  });

});

