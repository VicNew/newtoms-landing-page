import {LandingPageUserMessageProcess} from '@/js/LandingPageUserMessageProcess'
import {LandingPageProcess} from '@/js/LandingPageProcess'
import {LandingPageLeadSpyRestClient} from './LandingPageLeadSpyRestClient.spec'
import {LandingPageSpyRestClient} from './LandingPageSpyRestClient.spec'
import {LandingPageConfigMapper} from '@/js/LandingPageConfigMapper'
import {UserMessageExperience} from '@/js/UserMessageExperience'
import {SubmitedLeadData} from '@/js/SubmitedLeadData'

describe ('LandingPageUserMessageProcess Test Suit', () => {
  var landingPageUserMessageProcess = {}
  var landingPageRestClient = {}
  var landingPageLeadRestClient = {}
  var userMessageExperience = {}
  beforeEach (() => {
    userMessageExperience = new UserMessageExperience(UserMessageExperience.INFO_MSG_TYPE, '', '')
    landingPageRestClient = getLandingPageSpyRestClient()
    landingPageLeadRestClient = getLandingPageLeadSpyRestClient()
    var landingPageConfigMapper = new LandingPageConfigMapper()
    landingPageUserMessageProcess = new LandingPageUserMessageProcess(landingPageRestClient, landingPageLeadRestClient, landingPageConfigMapper)
  })

  it('Given a LandingPageUserMessageProcess class When create a new object then return a valid instance', () => {
    expect(landingPageUserMessageProcess).not.toBe(null)
    expect(landingPageUserMessageProcess instanceof Object).toBeTruthy()
    expect(landingPageUserMessageProcess instanceof LandingPageProcess).toBeTruthy()
    expect(landingPageUserMessageProcess instanceof LandingPageUserMessageProcess).toBeTruthy()
  })

  it('Given a UserMessageExperience of Success Type When check is A Success Message then return true', () => {
    userMessageExperience.messageType = UserMessageExperience.SUCCESS_MSG_TYPE
    expect(landingPageUserMessageProcess.isASuccessMessage(userMessageExperience)).toBeTruthy()
  })

  it('Given a UserMessageExperience of different Success Type When check is A Success Message then return false', () => {
    userMessageExperience.messageType = UserMessageExperience.INFO_MSG_TYPE
    expect(landingPageUserMessageProcess.isASuccessMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.WARNING_MSG_TYPE
    expect(landingPageUserMessageProcess.isASuccessMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.DANGER_MSG_TYPE
    expect(landingPageUserMessageProcess.isASuccessMessage(userMessageExperience)).toEqual(false)
  })

  it('Given a UserMessageExperience of Info Type When check is An Info Message then return true', () => {
    userMessageExperience.messageType = UserMessageExperience.INFO_MSG_TYPE
    expect(landingPageUserMessageProcess.isAnInfoMessage(userMessageExperience)).toBeTruthy()
  })

  it('Given a UserMessageExperience of different Info Type When check is An Info Message then return false', () => {
    userMessageExperience.messageType = UserMessageExperience.SUCCESS_MSG_TYPE
    expect(landingPageUserMessageProcess.isAnInfoMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.WARNING_MSG_TYPE
    expect(landingPageUserMessageProcess.isAnInfoMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.DANGER_MSG_TYPE
    expect(landingPageUserMessageProcess.isAnInfoMessage(userMessageExperience)).toEqual(false)
  })

  it('Given a UserMessageExperience of Warning Type When check is A Warning Message then return true', () => {
    userMessageExperience.messageType = UserMessageExperience.WARNING_MSG_TYPE
    expect(landingPageUserMessageProcess.isAWarningMessage(userMessageExperience)).toBeTruthy()
  })

  it('Given a UserMessageExperience of different Warning Type When check is A Warning Message then return false', () => {
    userMessageExperience.messageType = UserMessageExperience.SUCCESS_MSG_TYPE
    expect(landingPageUserMessageProcess.isAWarningMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.INFO_MSG_TYPE
    expect(landingPageUserMessageProcess.isAWarningMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.DANGER_MSG_TYPE
    expect(landingPageUserMessageProcess.isAWarningMessage(userMessageExperience)).toEqual(false)
  })

  it('Given a UserMessageExperience of Danger Type When check is A Danger Message then return true', () => {
    userMessageExperience.messageType = UserMessageExperience.DANGER_MSG_TYPE
    expect(landingPageUserMessageProcess.isADangerMessage(userMessageExperience)).toBeTruthy()
  })

  it('Given a UserMessageExperience of different Danger Type When check is A Danger Message then return false', () => {
    userMessageExperience.messageType = UserMessageExperience.SUCCESS_MSG_TYPE
    expect(landingPageUserMessageProcess.isADangerMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.INFO_MSG_TYPE
    expect(landingPageUserMessageProcess.isADangerMessage(userMessageExperience)).toEqual(false)
    userMessageExperience.messageType = UserMessageExperience.WARNING_MSG_TYPE
    expect(landingPageUserMessageProcess.isADangerMessage(userMessageExperience)).toEqual(false)
  })

  it('Given a full Lead data when check if is lead data complete and return true then user message is not afected and not showed ', () => {
    let lead = getDefaultSubmitedLeadData()
    var isDataCompleted = landingPageUserMessageProcess.isLeadDataComplete(lead, userMessageExperience) 
    expect(isDataCompleted).toEqual(true)
    expect(userMessageExperience.messageType).toEqual(UserMessageExperience.INFO_MSG_TYPE)
    expect(userMessageExperience.showMessage).toEqual(false)
  })

  it('Given a full Lead data when check if is lead data complete and return false then user message is a warning and showed ', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.firstName = ''
    var isDataCompleted = landingPageUserMessageProcess.isLeadDataComplete(lead, userMessageExperience) 
    expect(isDataCompleted).toEqual(false)
    expect(userMessageExperience.messageType).toEqual(UserMessageExperience.WARNING_MSG_TYPE)
    expect(userMessageExperience.showMessage).toEqual(true)
  })

  it('Given a full Lead data when check if is lead data complete and return false then user message is a warning message ', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.firstName = ''
    var isDataCompleted = landingPageUserMessageProcess.isLeadDataComplete(lead, userMessageExperience) 
    expect(isDataCompleted).toEqual(false)
    expect(userMessageExperience.statusText).toEqual('Warning!')
    expect(userMessageExperience.description).toEqual('All fields are required.')
  })

  it('Given a full Lead data when check if is lead data complete and return false for invalid email then user message is a warning message for email ', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.email = ''
    var isDataCompleted = landingPageUserMessageProcess.isLeadDataComplete(lead, userMessageExperience) 
    expect(isDataCompleted).toEqual(false)
    expect(userMessageExperience.statusText).toEqual('Warning!')
    expect(userMessageExperience.description).toEqual('Invalid email format.')
  })

})

function getLandingPageSpyRestClient() {
  return LandingPageSpyRestClient.getLandingPageSpyRestClient()
}
  
function getLandingPageLeadSpyRestClient() {
  return LandingPageLeadSpyRestClient.getLandingPageLeadSpyRestClient()
}

function getDefaultSubmitedLeadData() {
  let lead = new SubmitedLeadData()
  lead.firstName = 'Victor'
  lead.lastName = 'Luna'
  lead.company = 'Newtoms'
  lead.title = 'Developer'
  lead.email = 'victor.luna@newtoms.com'
  lead.isSubmited = false
  return lead
}