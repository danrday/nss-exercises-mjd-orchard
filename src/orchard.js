var $mainOutput = $(mainOutput);
$mainOutput.html("ORCHARD");

function Plant() {

  this.height = 0;

  //var to hold all new growth units, so that we can add a branch for every 10 growth units
  this.addBranches = null;

  this.increaseHeight = function (growth) {

    this.height += growth;
  };
   
    this.decreaseHeight = function(decrease) {
     let x = this.height;
     x -= growth;

    return x;
  };

};


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


//create prototypes

Tree.prototype = new Plant();

var oakTree = new Tree("Oak Tree");

// oakTree.increaseHeight(20);

console.log(oakTree);

var pearTree = new Tree("Pear Tree");




//var 'x' is [amountPerSec, .this] passed by setInterval in Tree.keepGrowing
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

  oakTree.keepGrowing(6);
  pearTree.keepGrowing(9);








