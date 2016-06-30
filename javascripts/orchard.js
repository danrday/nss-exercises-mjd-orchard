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