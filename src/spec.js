describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

function callMyFunction(callback) {
  callback();
}

describe('callMyFunction function', () => {
  it('calls the passed function', () => {
    const callback = jest.fn();

    callMyFunction(callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});