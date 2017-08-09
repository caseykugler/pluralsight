var dice = require("./dice");
var die = dice.die;

console.log(dice);

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total rolls: " + die.totalRolls);

console.log(die);

//container called an object, grouping/managing stuff
//organization are important
//object = console. log/warn/error etc
//properties = attributes of an object
//object literal var x = {}
//inside the role function this.object references the object inside a function/object
//managing source code creep is important
//encapsulation = selectively show information to others, important concept