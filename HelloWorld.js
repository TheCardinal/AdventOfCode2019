var Author = /** @class */ (function () {
    function Author(Name) {
        this.Name = Name;
    }
    return Author;
}());
var author = new Author('Peter TEST Simonis');
console.log("Hello " + author.Name);
