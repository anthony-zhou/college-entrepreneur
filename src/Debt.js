class Debt {
  constructor(description, cost, year, month) {
    this.description = description;
    this.cost = cost;
    this.year = year;
    this.month = month;
    this.monthlyPayment = cost;
  }
}

export default Debt;
