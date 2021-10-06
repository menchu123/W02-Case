describe("function toLowerCamelCase", () => {
  test("when function toLowerCamelCase receives 'hola-que-tal', it should return 'holaQueTal'", () => {
    const data = "hola-que-tal";
    const expected = "holaQueTal";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase receives 'testing-function', it should return 'testingFunction'", () => {
    const data = "testing-function";
    const expected = "testingFunction";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase receives 'Testing-Function', it should return 'The text contains capital letters'", () => {
    const data = "Testing-Function";
    const expected = "The text contains capital letters";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase receives 'testing_function', it should return 'The text contains underscores'", () => {
    const data = "testing_function";
    const expected = "The text contains underscores";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase doesn't receive an input, it should return 'You must provide some text'", () => {
    const expected = "You must provide some text";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });
});
