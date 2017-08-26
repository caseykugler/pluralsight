var book = require("../lib/grades").book;

book.addGrade(90);
book.addGrade(85);
book.addGrade(72);

var average = book.getAverage();

console.log(average);
