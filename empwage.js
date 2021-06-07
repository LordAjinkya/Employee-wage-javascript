  
//uc-3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0; empHrs = 4 
let empCheck = Math.floor(Math.random() * 10) % 3;
//function 
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOUR;            
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;            
        default:
            empHrs = 0;
    }
}
//Computation
let empWage = empHrs * WAGE_PER_HOUR;
empHrs = getWorkingHours(empWage);
console.log("Emp Wage: " + empWage);