export default function createIteratorObject(report) {
  const employeesIterator = {
    departments: Object.keys(report.allEmployees),
    currentDeptIndex: 0,
    currentEmployeeIndex: 0,
    next() {
      if (this.currentDeptIndex < this.departments.length) {
        const currentDept = this.departments[this.currentDeptIndex];
        const currentDeptEmployees = report.allEmployees[currentDept];
        
        if (this.currentEmployeeIndex < currentDeptEmployees.length) {
          const currentEmployee = currentDeptEmployees[this.currentEmployeeIndex];
          this.currentEmployeeIndex++;
          return { value: currentEmployee, done: false };
        } else {
          this.currentDeptIndex++;
          this.currentEmployeeIndex = 0;
          return this.next();
        }
      }
      
      return { done: true };
    }
  };
  
  return {
    [Symbol.iterator]: () => employeesIterator
  };
}
