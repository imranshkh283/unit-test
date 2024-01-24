test('addition', () => {
    expect(2 + 2).toBe(4)
})

test('NULL', () => {

    const i = null

    expect.assertions(2)

    expect(i).toBeNull()
    expect(i).toBeDefined()
})