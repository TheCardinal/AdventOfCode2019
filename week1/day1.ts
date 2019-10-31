class Assignment1 {
  constructor(private input: string) {}

  public calculate() {
    console.log(this.input);
  }
}

let exampleData = 'example1';
let assignment = new Assignment1(exampleData);
assignment.calculate();

let exampleData2 = 'example2';
assignment = new Assignment1(exampleData2);
assignment.calculate();
