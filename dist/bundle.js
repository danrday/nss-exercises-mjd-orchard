(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"


let Tree = require("./tree");
let Plant = require("./plant");

Tree.prototype = new Plant();

var oakTree = new Tree("Oak Tree");

// oakTree.increaseHeight(20);

console.log(oakTree);

var pearTree = new Tree("Pear Tree");


module.exports = {oakTree, pearTree};
},{"./plant":7,"./tree":8}],2:[function(require,module,exports){
"use strict";

var $mainOutput = $("#mainOutput");
$mainOutput.html("ORCHARD");

module.exports = $mainOutput;
},{}],3:[function(require,module,exports){
"use strict"

  let oakTree = require("./createPrototypes.js").oakTree
  let pearTree = require("./createPrototypes.js").pearTree

  oakTree.keepGrowing(6);
  pearTree.keepGrowing(9);



},{"./createPrototypes.js":1}],4:[function(require,module,exports){
"use strict"

//var 'x' is [amountPerSec, .this] passed by setInterval in Tree.keepGrowing

let $mainOutput = require("./domReference.js");

function growSpecs(x) {

    x[1].keepGrowing.setCounterSeconds(1);

    console.log("counterSeconds", x[1].keepGrowing.getCounterSeconds());

    console.log("x[0] = amt per sec", x[0]);

    console.log("x[1] = this", x[1]);

    x[1].increaseHeight(x[0]);

    //adds a branch for every 10 units of height added
    x[1].addBranches += x[0];

    if (x[1].addBranches >= 10) {
      var divByTen = (x[1].addBranches / 10)
      divByTen = Math.floor(divByTen);
      x[1].branches += divByTen;
      x[1].addBranches -= (divByTen*10);
    }

    console.log("x[1].addBranches", x[1].addBranches);
    console.log("height", x[1].height);
    console.log("branches", x[1].branches);
    console.log("name", x[1].name)


    $mainOutput.append(`<div>
    Your ${x[1].name} is ${x[1].height} cm tall, and has ${x[1].branches} branches!</div>`)


    if(x[1].keepGrowing.getCounterSeconds() > 30) {
    // console.log("GREATER THAN 5")
    clearInterval(x[1].keepGrowing.growInterval);
    // };
  }
};

module.exports = growSpecs;
},{"./domReference.js":2}],5:[function(require,module,exports){
"use strict";

let myOrchard = require("./orchard");
},{"./orchard":6}],6:[function(require,module,exports){
"use strict";


const domReference = require("./domReference");

const plant = require("./plant");
const tree = require("./tree");
const createPrototypes = require("./createPrototypes");
const growSpecs = require("./growSpecs");
const growCommands = require("./growCommands");

/* 
  Now, construct an object that contains a key/value pair for each
  of those modules that we pulled into this one
*/
let myOrchard = {
  domReference, plant, tree, createPrototypes, growSpecs, growCommands
};

/*
  Every module needs to specify what its output is. Think of this as the
  return statement in a function. What are we returning for use by other
  modules in the application?
 */
module.exports = myOrchard;
},{"./createPrototypes":1,"./domReference":2,"./growCommands":3,"./growSpecs":4,"./plant":7,"./tree":8}],7:[function(require,module,exports){
"use strict"

function Plant() {

  this.height = 0;

  //var to hold all new growth units, so that we can add a branch for every 10 growth units
  this.addBranches = null;

  this.increaseHeight = function (growth) {

    this.height += growth;
  };
   
    this.decreaseHeight = function(decrease) {
     let x = this.height;
     x -= decrease;

    return x;
  };

};

module.exports = Plant;
},{}],8:[function(require,module,exports){
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
},{"./growSpecs.js":4}]},{},[5])


//# sourceMappingURL=bundle.js.map
