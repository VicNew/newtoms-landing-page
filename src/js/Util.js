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

  static isAValidEmail (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
}
