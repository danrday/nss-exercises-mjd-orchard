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
    expect(testPlant.height).toBeDefined();
  });
  it("There should be a function named 'grow' on the prototype of Tree.", function() {
    let testTree = new Tree(5);
    expect(testTree.grow).toBeDefined();
  });
  it("There should be a function named 'trim' on the prototype of Tree.", function() {
    let testTree = new Tree(5)
    expect(testTree.trim).toBeDefined();
  });
  it("When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. Peartree.trim(2))", function() {
    var oakTree = new Tree(oakTree);
    oakTree.height = 10;
    oakTree.trim(5);
    expect(oakTree.height).toBe(5);
  });
  it("When you invoke the trim method on Tree, the values of the branches property should be decreased by one.", function() {
    var oakTree = new Tree(oakTree);
    oakTree.branches = 5;
    oakTree.trim(5);
    expect(oakTree.branches).toBe(4);
  });
  it("When you invoke the grow method on Tree, the height of the tree should be increased by the integer value that is passed as an argument(e.g. PearTree.grow(2)", function() {
    var oakTree = new Tree(oakTree);
    oakTree.grow(5);
    expect(oakTree.height).toBe(5);
  });

});

