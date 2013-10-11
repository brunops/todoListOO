describe('ItemView', function() {
  var item, itemView;

  beforeEach(function() {
    item = new Item({ text: 'Take dog for walk' });
    itemView = new ItemView({ model: item });
  });

  it("is associated with one model", function() {
    expect(itemView.model).toBe(item);
  });
});
