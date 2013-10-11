describe("Item", function() {
  var item;

  it("new item has text", function() {
    item = new Item({ text: 'New Item' });
    expect(item.text).toEqual('New Item');
  });

  it("is created as not finished", function() {
    item = new Item({});
    expect(item.finished).toBe(false);
  });

});
