export class UserMessageExperience {
  static SUCCESS_MSG_TYPE = 'success'
  static INFO_MSG_TYPE = 'info'
  static WARNING_MSG_TYPE = 'warning'
  static DANGER_MSG_TYPE = 'danger'
  constructor (messageType, statusText, description) {
    this.messageType = messageType
    this.statusText = statusText
    this.description = description
    this.fullDescription = ''
    this.showMessage = false
    this.showFullDescription = false
  }
}
