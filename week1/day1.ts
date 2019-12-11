class Assignment1 {
  private numbers: number[];
  constructor(private readonly input: string) {
    this.numbers = input.split('\n').map(Number);
  }

  public calculate(): number {
    return this.numbers.reduce((sum, current) => sum + this.doCalc(current), 0);
  }

  private doCalc(input: number): number {
    return Math.floor(input / 3) - 2;
  }

  private doCalc2(input: number): number {
    var required = this.doCalc(input);
    var total = 0;
    while (required > 0) {
      total += required;
      required = this.doCalc(required);
    }
    return total;
  }

  public calculateBonus() {
    return this.numbers.reduce(
      (sum, current) => sum + this.doCalc2(current),
      0
    );
  }
}

/*
let exampleData = '12';
let assignment = new Assignment1(exampleData);
assignment.calculate();
*/

/*
let exampleData2 = '14';
assignment = new Assignment1(exampleData2);
assignment.calculate();
*/

let assignmentData =
  '123457\n98952\n65241\n62222\n144922\n111868\n71513\n74124\n140122\n133046\n65283\n107447\n144864\n136738\n118458\n91049\n71486\n100320\n143765\n88677\n62034\n139946\n81017\n128668\n126450\n56551\n136839\n64516\n91821\n139909\n52907\n78846\n102008\n58518\n128627\n71256\n133546\n90986\n50808\n139055\n88769\n94491\n128902\n55976\n103658\n123605\n113468\n128398\n61725\n100388\n96763\n101378\n139952\n138298\n87171\n51840\n64828\n58250\n88273\n136781\n120097\n127291\n143752\n117291\n100023\n147239\n71296\n100907\n127612\n122424\n62942\n95445\n74040\n118994\n81810\n146408\n98939\n71359\n112120\n100630\n139576\n98998\n92481\n53510\n76343\n125428\n73447\n62472\n91370\n73506\n126539\n50739\n73133\n81906\n100856\n52758\n142303\n107605\n77797\n124355';
let assignment = new Assignment1(assignmentData);
console.log(`First part: ${assignment.calculate()}`);
//1659402 too low -> / 2 moest - 2 zijn: beter lezen ;-)
// 3318604 is correct

console.log(`Starting 1969`);
assignment = new Assignment1('1969');
console.log(`${assignment.calculateBonus()}`);

console.log(`Starting 100756`);
assignment = new Assignment1('100756');
console.log(`${assignment.calculateBonus()}`);

//4977862 too high
//4977863 too high
//4975039 is correct
assignment = new Assignment1(assignmentData);
console.log(`Second part: ${assignment.calculateBonus()}`);
