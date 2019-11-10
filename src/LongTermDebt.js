import Debt from './Debt'
const RATE = 0.02;

class LongTermDebt extends Debt {
  constructor(description, cost, year, month) {
    super(description, cost, year, month);
    this.monthlyPayment = (RATE * this.cost) / (1 - Math.pow(1+RATE, -12));;
    this.tenYearAnnuityPayment = (RATE * this.cost) / (1 - Math.pow(1+RATE, -12));
  }
}

export default LongTermDebt;
