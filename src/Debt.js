const RATE = 0.02;

class Debt {
  constructor(description, cost, year, month) {
    this.description = description;
    this.cost = cost;
    this.year = year;
    this.month = month;
    this.tenYearAnnuityPayment = (RATE * this.cost) / (1 - Math.pow(1+RATE, -12));
  }
}

export default Debt;
