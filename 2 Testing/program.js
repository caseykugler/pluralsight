var book = require("./lib/grades").book;

for(var i = 2; i < process.argv.length; i += 1){
    book.addGrade(parseInt(process.argv[i]));
}

console.log(book.getAverage());
console.log(book.getLetterGrade());

//program to intake numbers in the repl and total them, pretty neat