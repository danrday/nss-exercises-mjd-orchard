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