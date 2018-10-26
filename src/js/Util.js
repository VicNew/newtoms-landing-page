export class Util {
  static isEmptyString (someString) {
    return (this.isNull(someString) || (this.isAString(someString) && (someString.trim().length <= 0)))
  }

  static isAString (value) {
    return (typeof value.valueOf() === 'string')
  }

  static isNull (value) {
    return (value == null)
  }
}
