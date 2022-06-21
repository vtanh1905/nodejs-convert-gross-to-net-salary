import PostModel from './post.model';

describe("PostModel", () => {
  test("defines constuctor", () => {
    const postModel = new PostModel([]);
    expect(postModel.getAll()).toEqual([]);
  });

  test("defines setRule()", () => {
    const postModel = new PostModel([]);
    expect(typeof postModel.getAll).toBe("function");
  });
});