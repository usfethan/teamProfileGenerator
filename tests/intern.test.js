const Intern = require("../library/Intern");

//creating intern object
test("creates an Intern object", () => {
    const intern = new Intern("Fethan", 1, "fethan@gmail.com", "NYU");
});

//gets school from getschool
test("gets intern school", () => {
    const intern = new Intern("Fethan", 1, "fethan@gmail.com", "NYU");
    expect(intern.school).toEqual(expect.any(Strin));
});

//get role from getRole
test("gets role of employee", () => {
    const intern = new Intern("Fethan", 1, "fethan@gmail.com", "NYU");
    expect(intern.getRole()).toEqual(expect("Intern")); 
});
