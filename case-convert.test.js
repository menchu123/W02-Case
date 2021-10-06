const toLowerCamelCase = (kebabCase) => {
  if (kebabCase === undefined) {
    return "You must provide some text";
  }
  let lowerCamelCase = kebabCase.split("");
  for (let i = 0; i < lowerCamelCase.length; i++) {
    if (lowerCamelCase[i] === "-") {
      if (lowerCamelCase[i + 1] === lowerCamelCase[i + 1].toUpperCase()) {
        return "The text contains capital letters";
      } else {
        lowerCamelCase[i + 1] = lowerCamelCase[i + 1].toUpperCase();
        lowerCamelCase.splice(i, 1);
      }
    } else if (lowerCamelCase[i] === "_") {
      return "The text contains underscores";
    } else if (lowerCamelCase[i] === lowerCamelCase[i].toUpperCase()) {
      return "The text contains capital letters";
    }
  }
  return lowerCamelCase.join("");
};

describe("function toLowerCamelCase", () => {
  test("when function toLowerCamelCase receives 'hola-que-tal', it should return 'holaQueTal'", () => {
    const data = "hola-que-tal";
    const expected = "holaQueTal";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase receives 'this-is-now-camel-case', it should return 'ThisIsNowCamelCase'", () => {
    const data = "this-is-now-camel-case";
    const expected = "thisIsNowCamelCase";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase receives 'testing-function', it should return 'testingFunction'", () => {
    const data = "testing-function";
    const expected = "testingFunction";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });

  test("when function toLowerCamelCase receives 'esto-Es-erroneo', it should return 'The text contains capital letters'", () => {
    const data = "esto-Es-erronEo";
    const expected = "The text contains capital letters";

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
    const data = undefined;
    const expected = "You must provide some text";

    const result = toLowerCamelCase(data);

    expect(result).toBe(expected);
  });
});
