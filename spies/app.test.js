const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe("App", () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("Shane", 25);
    expect(spy).toHaveBeenCalledWith("Shane", 25);
  });

  it("should call save user with user object", () => {
    let email = "test@test.com";
    let password = "testpassword";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
