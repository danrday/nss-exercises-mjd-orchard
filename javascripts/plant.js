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