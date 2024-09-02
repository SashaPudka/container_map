import ErrorRepository from "../ErrorRepository";

test('getting the error code', () => {
    const error = new ErrorRepository();
    error.add(400, 'request is incorrect')
    expect(error.translate(400)).toBe('request is incorrect')
})

test('Unknown error code', () => {
    const error = new ErrorRepository();
    expect(error.translate(488)).toBe('Unknown error')
})