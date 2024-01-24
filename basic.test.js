test('Addition', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)

    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('NULL', () => {

    const i = null

    expect.assertions(2)

    expect(i).toBeNull()
    expect(i).toBeDefined()
})

test('Array', () => {
    const animal = ['dog', 'cat', 'bird']

    expect(animal).toContain('cat')
    expect(animal).toBeInstanceOf(Array)
})

test('Object', () => {
    const obj = {
        name: 'John',
    }
    expect(obj).toEqual({ name: 'John' })
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('name', 'John')
})

function ThrowErr() {
    throw new Error('Error')
}

test('Throw Err', () => {
    expect(() => ThrowErr()).toThrow()
})