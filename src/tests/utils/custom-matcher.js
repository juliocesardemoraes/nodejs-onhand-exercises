function toBeCustomCheck(actual, pass, customMessage) {
  if (pass) {
    return {
      message: () => `test passed`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected: ${customMessage}`,
      pass: false,
    };
  }
}

export { toBeCustomCheck };
