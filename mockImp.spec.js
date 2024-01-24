test("mockImplementation", () => {

    const mockFn = jest.fn(() => 'default').mockImplementation(() => 'First')

    const res1 = mockFn();
})


test('mockImplementationOnce', () => {

    const mockFn = jest.fn(() => 'dafault').mockImplementationOnce(() => 'Imp Once');

    const res1 = mockFn();
    const res2 = mockFn();

})