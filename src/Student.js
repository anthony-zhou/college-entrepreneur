class Student {
  constructor() {
    this.creditScore = 700;
    this.accountBalance = 0;
    this.semesterTuitionRate = 8500;
    this.studentLoan = -8500;
  }
  addMoney(val){
    this.accountBalance += val;
    if(this.accountBalance < 0){
      creditScore -= 10;
    }
  payLoan(val){
    this.studentLoan += val;
    this.accountBalance -= val;
  }
  }
}

export default Student;
