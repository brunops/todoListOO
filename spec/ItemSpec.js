describe("Item", function() {
  var item;

  it("new item has text", function() {
    item = new Item({ text: 'New Item' });
    expect(item.text).toEqual('New Item');    
  }); 

});
