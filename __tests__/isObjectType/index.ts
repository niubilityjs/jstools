import { isObjectType } from '../../src'


describe('isObjectTypes', () => {
  test('isBoolean', () => {
    expect(isObjectType(true)).toBe('Boolean')
  })

  test('isNumber', () => {
    expect(isObjectType(1)).toBe('Number')
  })

  test('isString', () => {
    expect(isObjectType('hello')).toBe('String')
  })

  test('isUndefined', () => {
    expect(isObjectType(undefined)).toBe('Undefined')
  })

  test('isObject', () => {
    expect(isObjectType({})).toBe('Object')
  })

  test('isArray', () => {
    expect(isObjectType([])).toBe('Array')
  })

  test('isSymbol', () => {
    expect(isObjectType(Symbol())).toBe('Symbol')
  })

  test('isFunction', () => {
    expect(isObjectType(() => {})).toBe('Function')
  })

})
