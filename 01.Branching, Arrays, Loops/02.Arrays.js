var getDieRoll = function(dieSize){
    var result = Math.ceil(dieSize * Math.random());
    return result;
};

for(var i = 0; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

var roll = getDieRoll(6);

for(var i = 0; i < roll; i += 1) {
    console.log("*")
    roll = getDieRoll(6)
}

if(roll >= 3 && roll <=5)  {
    console.log("Great roll, my dude!");
}

else if(roll==1){
    console.log("That roll sucks, my dude...");
}
else{
    console.log("That roll was ok.");
};