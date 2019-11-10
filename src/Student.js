class Student {
  constructor() {
    this.creditScore = 700;
    this.accountBalance = 0;
    this.semesterTuitionRate = 8500;
    this.studentLoan = -8500;
    this.APR = 0.05;
    this.SLIRate = 0.01;
  }
  addMoney(val){
    this.accountBalance += val;
    if(this.accountBalance < 0){
      this.creditScore -= 10;
    }
  }
  payLoan(val){
    this.studentLoan += val;
    this.accountBalance -= val;
  }
  checkMonth(val){
    if(val % 12 == 0){
      //TODO: Add this later
    }
  }
}

export default Student;
