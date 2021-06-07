//uc-5
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

const NUM_OF_WORKING_DAYS = 10;
const MAX_HRS_IN_MONTH = 100;

let empHrs = 0;  
let totalEmpHrs = 0;
let totalWorkingDays = 0;
//while loop
while ( totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}   
//function 
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOUR;            
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;            
        default:
            return 0;
    }
}
//Computation
let empWage = totalEmpHrs * WAGE_PER_HOUR;
// empHrs = getWorkingHours(empWage);
console.log(" Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);