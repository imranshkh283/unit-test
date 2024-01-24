test('Addition', () => {
    expect(2 + 2).toBe(4)
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
})

function ThrowErr() {
    throw new Error('Error')
}

test('Throw Err', () => {
    expect(() => ThrowErr()).toThrow()
})