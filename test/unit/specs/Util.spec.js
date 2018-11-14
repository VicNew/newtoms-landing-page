import {Util} from '@/js/Util'

describe('Util Class Test', () => {
  it('Given a empty string value when check is empty string then return true', () => {
    expect(Util.isEmptyString('')).toEqual(true)
  })

  it('Given a string with blank values when check is empty string then return true', () => {
    expect(Util.isEmptyString('   ')).toEqual(true)
  })

  it('Given a null values when check is empty string then return true', () => {
    expect(Util.isEmptyString(null)).toEqual(true)
  })

  it('Given a string value when check is empty string then return false', () => {
    expect(Util.isEmptyString('Some Text')).toEqual(false)
  })

  it('Given a number value when check is empty string then return false', () => {
    expect(Util.isEmptyString(0)).toEqual(false)
  })

  it('Given a string value when check is a string then return true', () => {
    expect(Util.isAString('')).toEqual(true)
  })

  it('Given a number value when check is a string then return false', () => {
    expect(Util.isAString(0)).toEqual(false)
  })

  it('Given a null value when check is null then return true', () => {
    expect(Util.isNull(null)).toEqual(true)
  })

  it('Given a value when check is null then return false', () => {
    expect(Util.isNull('')).toEqual(false)
  })

  it('Given a valid email when check is A Valid Email then return true', () => {
    expect(Util.isAValidEmail('victor.luna@newtoms.com')).toEqual(true)
  })

  it('Given an invalid email when check is A Valid Email then return true', () => {
    expect(Util.isAValidEmail('victor.luna')).toEqual(false)
    expect(Util.isAValidEmail('@newtoms.com')).toEqual(false)
    expect(Util.isAValidEmail('victor.luna@newtoms')).toEqual(false)
  })

})