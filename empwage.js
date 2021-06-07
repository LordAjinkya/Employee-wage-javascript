console.log('Welcome to employee wage program');

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if  (empCheck == IS_ABSENT)
    console.log("Employee is ABSENT");
else
    console.log("Employee Is PRESENT");