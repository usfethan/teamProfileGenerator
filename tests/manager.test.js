const Manager = require("../library/Manager");

//create manager object
test("creates a manager object", () => {
    const manager =new Manager("Fethan", 1, "fethan@gmail.com", 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

//get role from getRole
test("gets role of employee", () => {
    const manager = new Manager("Fethan", 1, "fethan@gmail.com", 2);
    expect(manager.getRole()).toEqual("Manager");
    
});