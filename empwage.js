//uc-8
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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();


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
    empDailyHrsMap.set(totalWorkingDays , empHrs);
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));

    //uc-10
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\n Day ' + this.dayNum + ' => Working Hour is ' + this.dailyHours +
                                    'And Wage Earned = ' + this.dailyWage
        },
    });
}   
console.log("Uc 10 showing Daily Hours Worked and Wage Earned :"+empDailyHrsAndWageArr);
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
console.log(empDailyWageMap);
function totalWages(totalWages, dailyWage){
    return totalWages + dailyWage;
}
//UC-8
console.log("UC8- Emp Wage Map totalHrs: "+
                Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
 
//UC-9
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;

}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow.:" + " Total Hours: " + totalHours + " Total Wages : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (values , key ,map) => {
    if( values == 8 ) fullWorkingDays.push(key);
    else if (values == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: " +fullWorkingDays);
console.log("Part Working Days: " +partWorkingDays);
console.log("Non Working Days: " +nonWorkingDays);  

/**UC 11A to 11D Using Object Function along with Arrow Functions */

let totalWages = empDailyHrsAndWageArr
                 .filter (dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);

let totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours,dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours ,0);
console.log("UC 11A Total Hours: "+totalHours+ " Total Wages: "+totalWages);     

Process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage == 8)
                     .forEach(dailyHrsAndWage => Process.stdout.write(dailyHrsAndWage.toString()));
  
let partWorkingDaysStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n UC 11C PartWorkingDayStrings: "+ partWorkingDaysStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Uc 11D NonWorkingDayNums: "+nonWorkingDayNums);      
