"use strict"

let growSpecs = require("./growSpecs.js");

function Tree(name) {

  this.name = name;

  this.branches = 0;

  this.grow = function(amount) {
    this.height += amount;
    return this.height;
  };

  this.trim = function(amount) {
    this.branches -= 1;
    this.height -= amount;
    return this.branches;
  };

  this.keepGrowing = function (amountPerSec) {
  var instance = this;
  this.keepGrowing.growInterval = setInterval(growSpecs, 1000, [amountPerSec, instance]);
  var counterSeconds = 0;
  this.keepGrowing.getCounterSeconds = function() {return counterSeconds};
  this.keepGrowing.setCounterSeconds = function(x) {
    counterSeconds += x;
    }
  };

};

module.exports = Tree;