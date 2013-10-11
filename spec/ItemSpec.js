describe("Item", function() {
  var item;

  beforeEach(function() {
    item = new Item({ text: 'New Item' });
  });

  it("new item has text", function() {
    expect(item.text).toEqual('New Item');
  });

  it("is created as not finished", function() {
    expect(item.finished).toBe(false);
  });

  it(".finish() marks item as finished", function() {
    item.finish();
    expect(item.finished).toBe(true);
  });
  
  it(".start() marks item as in progress", function() {
    item.finish();
    item.start();
    expect(item.finished).toBe(false);
  });
});


