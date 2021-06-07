//uc-6
//Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
//Variables
let empHrs = 0;  
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

//while loop
while ( totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}   
//Function For Getting Working Hours
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
let empWage = calcDailyWage(totalEmpHrs);
console.log(" Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

//Array Helper Functions
// UC 7A -Calc total Wage Using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A -Toatal Days: " + totalWorkingDays + 
            "Total Hrs: " + totalEmpHrs + "Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC-7A -Emp Wage with reduce:" + empDailyWageArr.reduce(totalWages,0));

//UC 7B - Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B - Daily Wage Map;");
console.log(mapDayWithWageArr);

//UC 7C - Show Days When Full time wage of 160 was earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C - Daily Wage Filter When Fulltime Wage Earned:");
console.log(mapDayWithWageArr);

//UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
} 
console.log("UC-7D - First time Fulltime wage was earned on day:"+
                fullDayWageArr.find(findFulltimeWage));

//UC-7E -Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
} 
console.log("UC-7E - Check All Element Have Full Time wage :"+
                fullDayWageArr.every(isAllFulltimeWage));

//UC-7F -Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
} 
console.log("UC-7F - Check If Any Part Time wage :"+
                mapDayWithWageArr.some(isAnyPartTimeWage));
            
//UC-7G -Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage >0) return numOfDays+1;
    return numOfDays;
} 
console.log("UC-7G - Number of Days Emp Worked :"+
                empDailyWageArr.reduce(totalDaysWorked, 0));
