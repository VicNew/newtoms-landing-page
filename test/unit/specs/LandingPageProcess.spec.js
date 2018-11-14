import {LandingPageConfig} from '@/js/LandingPageConfig'
import {SimpleLeadData} from '@/js/SimpleLeadData'
import {SubmitedLeadData} from '@/js/SubmitedLeadData'
import {LandingPageProcess} from '@/js/LandingPageProcess'
import {LandingPageSimpleRestClient} from '@/js/LandingPageSimpleRestClient'
import {LandingPageLeadRestClient} from '@/js/LandingPageLeadRestClient'
import {LandingPageConfigMapper} from '@/js/LandingPageConfigMapper'
import {PrivacyPolicyData} from '@/js/PrivacyPolicyData'
import {LandingPageLeadSpyRestClient} from './LandingPageLeadSpyRestClient.spec'
import {LandingPageSpyRestClient} from './LandingPageSpyRestClient.spec'

describe('Landing Page Process Test', () => {
  let landingPageProcess = {}
  var landingPageRestClient = {}
  var landingPageLeadRestClient = {}
  beforeEach (() => {
    landingPageRestClient = getLandingPageSpyRestClient()
    landingPageLeadRestClient = getLandingPageLeadSpyRestClient()
    var landingPageConfigMapper = new LandingPageConfigMapper()
    landingPageProcess = new LandingPageProcess(landingPageRestClient, landingPageLeadRestClient, landingPageConfigMapper)
  })

  it('Given Landing Page Process class when create a new object then return an instance', () => {
    expect(landingPageProcess != null).toEqual(true)
    expect(typeof landingPageProcess.valueOf()).toEqual('object')
  })

  it('Given Landing Page Process class when get page configuration then return a Landing Page Config instance', () => {
    expect(landingPageProcess.getPageConfiguration(1)).not.toBe(null)
    expect(typeof landingPageProcess.getPageConfiguration().valueOf()).toEqual('object')
    expect(landingPageProcess.getPageConfiguration() instanceof LandingPageConfig).toEqual(true)
  })

  it('Given Landing Page Process class when get page configuration then call a rest api to get the configuration', () => {
    expect(landingPageProcess.getPageConfiguration(1)).not.toBe(null)
    expect(landingPageRestClient.getLandingPageTemplateConfigById).toHaveBeenCalled()
  })

  it('Given Landing Page Process class when get page configuration then return a default Landing Page Config', () => {
    let pageConfig = landingPageProcess.getPageConfiguration(1)
    expect(pageConfig.documentId).toEqual(1)
    expect(pageConfig.documentType).toEqual('Whitepaper')
    expect(pageConfig.documentTitle).toEqual('Best practices for microservices')
    expect(pageConfig.documentDescription).toEqual('Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.')
    expect(pageConfig.documentUrl).toEqual('https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf')
  })

  it('Given Landing Page Process class when get new lead then return a Simple Lead Data instance', () => {
    expect(landingPageProcess.getNewLead() != null).toEqual(true)
    expect(typeof landingPageProcess.getNewLead().valueOf()).toEqual('object')
    expect(landingPageProcess.getNewLead() instanceof SimpleLeadData).toEqual(true)
    expect(landingPageProcess.getNewLead() instanceof SubmitedLeadData).toEqual(true)
  })

  it('Given Landing Page Process class when get new lead then return a default Simple Lead Data ', () => {
    let lead = landingPageProcess.getNewLead()
    expect(lead.firstName).toEqual('')
    expect(lead.lastName).toEqual('')
    expect(lead.company).toEqual('')
    expect(lead.title).toEqual('')
    expect(lead.email).toEqual('')
    expect(lead.isSubmited).toEqual(false)
  })

  it('Given a full Lead data when check if is lead data complete then return true', () => {
    let lead = getDefaultSubmitedLeadData()
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(true)
  })

  it('Given a Lead data with empty first name when check if is lead data complete then return false', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.firstName = ''
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty last name when check if is lead data complete then return false', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.lastName = ''
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty company when check if is lead data complete then return false', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.company = ''
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty title when check if is lead data complete then return false', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.title = ''
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty email when check if is lead data complete then return false', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.email = ''
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with invalid email when check if is lead data complete then return false', () => {
    let lead = getDefaultSubmitedLeadData()
    lead.email = 'victor.luna'
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data when submit Lead Data then return lead as submited', () => {
    let lead = getDefaultSubmitedLeadData()
    landingPageProcess.submitLeadData(lead)
    expect(lead.isSubmited).toEqual(true)
  })

  it('Given a Lead data when submit Lead Data create a new Lead in server', () => {
    let lead = getDefaultSubmitedLeadData()
    landingPageProcess.submitLeadData(lead)
    expect(landingPageLeadRestClient.createANewLead).toHaveBeenCalled()
    expect(landingPageLeadRestClient.createANewLead).toHaveBeenCalledWith(lead)
  })

  it('Given Landing Page Process class when get Privacy Policy Data then return a PrivacyPolicyData instance', () => {
    expect(landingPageProcess.getPrivacyPolicyData() != null).toEqual(true)
    expect(typeof landingPageProcess.getPrivacyPolicyData().valueOf()).toEqual('object')
    expect(landingPageProcess.getPrivacyPolicyData() instanceof PrivacyPolicyData).toEqual(true)
  })

  it('Given Landing Page Process class when get Privacy Policy Data then return a default Privacy Policy Data', () => {
    let privacyPolicyData = landingPageProcess.getPrivacyPolicyData()
    expect(privacyPolicyData.isPrivatePolicyVisible).toEqual(false)
    expect(privacyPolicyData.selectedLanguage).toEqual('En')
  })

  it('Given Landing Page Process class when switch Privacy Policy then toggle Privacy Policy Visibility', () => {
    let privacyPolicyData = new PrivacyPolicyData()
    expect(privacyPolicyData.isPrivatePolicyVisible).toEqual(false)
    landingPageProcess.switchPrivacyPolicy(privacyPolicyData)
    expect(privacyPolicyData.isPrivatePolicyVisible).toEqual(true)
  })

  it('Given Landing Page Process class when select Privacy Policy Language then set new language in Privacy Policy Data', () => {
    let privacyPolicyData = new PrivacyPolicyData()
    expect(privacyPolicyData.selectedLanguage).toEqual('En')
    landingPageProcess.selectPrivacyPolicyLanguage(privacyPolicyData, 'Esp')
    expect(privacyPolicyData.selectedLanguage).toEqual('Esp')
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