import HomeController from './home.controller';

describe("PostModel", () => {
  // test("defines constuctor", () => {
    
  // });

  test("defines doGet()", () => {
    expect(HomeController.doGet).toEqual(1);
  });
});