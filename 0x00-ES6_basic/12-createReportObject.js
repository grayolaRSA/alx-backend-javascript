/* import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
const allEmployees = new Map([...employeesList]);

function getNumberOfDepartments(employeesList) {
let Num = 0;

for (dept of departmentName) {
    Num += dept;
    return Num;
};

};
    return {allEmployees: getNumberOfDepartments(employeesList)}; */
    export default function createReportObject(employeesList) {
        return {
          allEmployees: employeesList,
          getNumberOfDepartments: function() {
            return Object.keys(this.allEmployees).length;
          },
        };    
};