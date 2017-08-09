var die = {
    size: 6,
    totalRolls: 0,
    roll: function(dieSize){
        var result = Math.ceil(Math.ceil(this.size) * Math.random());
        this.totalRolls += 1;
        return result;

    }
};

exports.die = die;
exports.name = "My Dice Exports"