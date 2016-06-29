"use strict"

describe("Unit Tests", function() {
  it("There should be a Plant function defined.", function() {
    expect(Plant).toBeDefined();
  });
  it("There should be a Tree functino defined.", function() {
    expect(Tree).toBeDefined();
  });
  it("There should be a function named increaseHeight on the prototype of Plant.", function() {
    let testPlant = new Plant();
    expect(testPlant.increaseHeight).toBeDefined();
  });
  it("There should be a function named decreaseHeight on the prototype of Plant.", function() {
    let testPlant = new Plant();
    expect(testPlant.decreaseHeight).toBeDefined();
  });
  it("There should be a height property on Plant.", function() {
    let testPlant = new Plant(5);
    expect(testPlant.height).toEqual(5);
  });
  it("There should be a function named 'grow' on the prototype of Tree.", function() {
    expect(Tree.prototype.grow).toBeDefined();
  });
  it("There should be a function named 'trim' on the prototype of Tree.", function() {
    expect(Tree.prototype.trim).toBeDefined();
  });
  it("When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. Peartree.trim(2))", function() {
    var testTree = new Tree(10);
    testTree.trim(5);
    expect(testTree.height).toBe(5);
  });
  it("When you invoke the trim method on Tree, the values of the branches property should be decreased by one.", function() {
    let x = Tree.branches.value
    var testTree = new Tree(10);
    testTree.trim(5);
    expect(testTree.branches).toBe(x-1);
  });
  it("When you invoke the grow method on Tree, the height of the tree should be increased by the integer value that is passed as an argument(e.g. PearTree.grow(2)", function() {
    var testTree = new Tree(10);
    testTree.grow(5);
    expect(testTree.height).toBe(15);
  });

});

