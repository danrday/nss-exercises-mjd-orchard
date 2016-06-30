"use strict"


let Tree = require("./tree");
let Plant = require("./plant");

Tree.prototype = new Plant();

var oakTree = new Tree("Oak Tree");

// oakTree.increaseHeight(20);

console.log(oakTree);

var pearTree = new Tree("Pear Tree");


module.exports = {oakTree, pearTree};