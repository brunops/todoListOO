describe('ItemView', function() {
  var item, itemView;

  beforeEach(function() {
    item = new Item({ text: 'Take dog for walk' });
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
});
