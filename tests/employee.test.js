const Employee = require("../library/Employee");

//creating employee object
test("creates an employee object", () => {
    const employee = new Employee("Fethan", 1, "fethan@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets id from getid -name
test("gets employee name", () => {
    const employee = new Employee("Fethan", 1, "fethan@gmail.com");
    expect(employee.name).toEqual(expect.any(String));
});

//get id from getid
test("gets employee ID", () => {
    const employee = new Employee("Fethan", 1, "fethan@gmail.com");
    expect(employee.id).toEqual(expect.any(Number));
});

//get email from getemail
test("gets employee email", () => {
    const employee = new Employee("Fethan", 1, "fethan@gmail.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// get role from getrole

test("gets role of employee", () => {
    const employee = new Employee("Fethan", 1, "fethan@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
});



