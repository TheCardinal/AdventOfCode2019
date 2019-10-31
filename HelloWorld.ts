class Author {
  constructor(public Name: string) {}
}

let author = new Author('Peter TEST Simonis');

console.log(`Hello ${author.Name}`);
