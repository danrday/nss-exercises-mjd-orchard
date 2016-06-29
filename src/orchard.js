
function Plant() {

  this.height = 5;

  this.increaseHeight = function (growth) {
    let beforeHeight = this.height;

    this.height += growth;

    var amountGrown = this.height - beforeHeight;

    var everyTenth = Math.floor(amountGrown / 10);

    this.branches += everyTenth;

  };
   
    this.decreaseHeight = function(decrease) {
     let x = this.height;
     x -= growth;

    return x;
  };

};


function Tree() {

  this.branches = 5;

  this.grow = function(amount) {
    this.height += amount;
    return this.height;
  };

  this.trim = function(amount) {
    this.branches -= 1;
    return this.branches;
  };

};


//create prototypes

Tree.prototype = new Plant();

var oakTree = new Tree();

oakTree.increaseHeight(20);

console.log(oakTree);


var pearTree = new Tree();


//set interval function below





var counterSeconds = 0;

function growFunction (instance, amountPerSec) {
  growFunction.growInterval = setInterval(growSpecs, 1000, [instance, amountPerSec]);
};

//var Array is [instance, amountPerSec]
function growSpecs(varArray) {
    counterSeconds ++;

    console.log("counterSeconds", counterSeconds);

    console.log("instance[0]", varArray[0]);

    console.log("instance[1]", varArray[1]);

    varArray[0].increaseHeight(varArray[1]);

    console.log("height", varArray[0].height);
    console.log("branches", varArray[0].branches);

    if(counterSeconds > 10) {
    clearInterval(growFunction.growInterval);
    }
  }






