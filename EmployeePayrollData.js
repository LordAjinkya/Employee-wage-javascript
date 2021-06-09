class EmployeePayrollData {
    //Property
    id;
    name;
    salary;
    startDate;

    //constructor
    constructor(id,name,salary,startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.startDate = startDate;
    }

    //getter and setter method
    get name(){return this._name;}
    set name(name){
        console.log("Setting: "+name);
        this._name = name;
    }

    //method
    toString(){
        return "id" + this.id + ", name ='" + this.name + ", salary=" + this.salary;

    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = 'john';
console.log(employeePayrollData.toString());