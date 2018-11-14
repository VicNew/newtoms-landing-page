import {LandingPageProcess} from './LandingPageProcess'
import {UserMessageExperience} from './UserMessageExperience'

export class LandingPageUserMessageProcess extends LandingPageProcess {
  isLeadDataComplete (lead, userMessage) {
    var isDataCompleted = super.isLeadDataComplete(lead)
    if (!isDataCompleted) {
      this.setMessageForImcompletedData(lead, userMessage)
    } else {
      userMessage.showMessage = false
    }
    return isDataCompleted
  }

  isASuccessMessage (userMessage) {
    return userMessage.messageType === UserMessageExperience.SUCCESS_MSG_TYPE
  }

  isAnInfoMessage (userMessage) {
    return userMessage.messageType === UserMessageExperience.INFO_MSG_TYPE
  }

  isAWarningMessage (userMessage) {
    return userMessage.messageType === UserMessageExperience.WARNING_MSG_TYPE
  }

  isADangerMessage (userMessage) {
    return userMessage.messageType === UserMessageExperience.DANGER_MSG_TYPE
  }

  setMessageForImcompletedData (lead, userMessage) {
    this.setMessageAWarnigType(userMessage, this.getIncompletedMessageDescription(lead))
    userMessage.showMessage = true
  }

  setMessageAWarnigType (userMessage, description) {
    userMessage.messageType = UserMessageExperience.WARNING_MSG_TYPE
    userMessage.statusText = 'Warning!'
    userMessage.description = description
  }

  getIncompletedMessageDescription (lead) {
    return this.isValidEmail(lead.email) ? 'All fields are required.' : 'Invalid email format.'
  }
}
