const Engineer = require("../library/Engineer");

//creating engineer object
test("creates an Engineer object", () => {
    const engineer = new Engineer("Fethan", 1, "fethan@gmail.com", "usfethan");
    expect(engineer.github).toEqual(expect.any(String));
});

//gets github from getgithub
test("gets engineer github", () => {
    const engineer = new Engineer("Fethan", 1, "fethan@gmail.com", "usfethan");
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));

});

//gets role from getrole
test("gets role of employee", () => {
    const engineer = new Engineer("Fethan", 1, "fethan@gmail.com", "usfethan");
    expect(engineer.getRole()).toEqual("Engineer");
});