// Write your solution in this file!



let employee = { // Creating the object
    // Employee 1

    name: "Eric",
    streetAddress: "12 Eldoret",
    age: 34,

}

// Function 1

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newEmployee = {...employee}; // Edits a property value of the object Non-Destructively

    newEmployee[key] = value;

    return newEmployee;
}

//Function 2 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee.streetAddress = "12 Broadway"; // Edits a property value of the object Destructively

    return employee;
}

// Function 3

function deleteFromEmployeeByKey() {

    const {name, ...newEmployee } = employee; // /Removes property of the Object Non-Destructively

    return newEmployee;
}

// Function 4

function destructivelyDeleteFromEmployeeByKey() {

    delete employee.name; //Removes property of the Object Destructively

    return employee;
}