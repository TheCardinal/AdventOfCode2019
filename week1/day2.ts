class Assignment2 {
  private numbers: number[];

  constructor(input: number[]) {
    this.numbers = input;
  }
  public calculate(input: number[]): number {
    let position = 0;
    this.restore(input);
    while (input[position] !== 99) {
      const number1 = input[input[position + 1]];
      const number2 = input[input[position + 2]];
      const output = input[position + 3];
      if (input[position] === 1) {
        input[output] = number1 + number2;
      } else if (input[position] === 2) {
        input[output] = number1 * number2;
      } else {
        console.error(
          `Illegal opcode at position ${position}: ${input[position]}`
        );
        break;
      }
      //console.log(input.toString());
      position += 4;
    }
    return input[0];
  }
  private restore(input: number[]): void {
    input[1] = 12;
    input[2] = 2;
  }
}

let myInput = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  10,
  19,
  2,
  9,
  19,
  23,
  1,
  9,
  23,
  27,
  2,
  27,
  9,
  31,
  1,
  31,
  5,
  35,
  2,
  35,
  9,
  39,
  1,
  39,
  10,
  43,
  2,
  43,
  13,
  47,
  1,
  47,
  6,
  51,
  2,
  51,
  10,
  55,
  1,
  9,
  55,
  59,
  2,
  6,
  59,
  63,
  1,
  63,
  6,
  67,
  1,
  67,
  10,
  71,
  1,
  71,
  10,
  75,
  2,
  9,
  75,
  79,
  1,
  5,
  79,
  83,
  2,
  9,
  83,
  87,
  1,
  87,
  9,
  91,
  2,
  91,
  13,
  95,
  1,
  95,
  9,
  99,
  1,
  99,
  6,
  103,
  2,
  103,
  6,
  107,
  1,
  107,
  5,
  111,
  1,
  13,
  111,
  115,
  2,
  115,
  6,
  119,
  1,
  119,
  5,
  123,
  1,
  2,
  123,
  127,
  1,
  6,
  127,
  0,
  99,
  2,
  14,
  0,
  0
];

//myInput = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
//myInput = [1, 0, 0, 0, 99];
let a = new Assignment2(myInput);
let result = a.calculate(myInput);

console.log(`Result: ${result}`);
// 250715 too low
// 9581917 --> restore vergeten
