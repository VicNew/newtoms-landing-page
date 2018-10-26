import {LandingPageConfig} from '@/js/LandingPageConfig'
import {SimpleLeadData} from '@/js/SimpleLeadData'
import {LandingPageProcess} from '@/js/LandingPageProcess'

describe('Landing Page Process Test', () => {
  it('Given Landing Page Process class when create a new object then return an instance', () => {
    let landingPageProcess = new LandingPageProcess();
    expect(landingPageProcess != null).toEqual(true)
    expect(typeof landingPageProcess.valueOf()).toEqual('object')
  })

  it('Given Landing Page Process class when get page configuration then return a Landing Page Config instance', () => {
    let landingPageProcess = new LandingPageProcess();
    expect(landingPageProcess.getPageConfiguration() != null).toEqual(true)
    expect(typeof landingPageProcess.getPageConfiguration().valueOf()).toEqual('object')
    expect(landingPageProcess.getPageConfiguration() instanceof LandingPageConfig).toEqual(true)
  })

  it('Given Landing Page Process class when get page configuration then return a default Landing Page Config', () => {
    let landingPageProcess = new LandingPageProcess();
    let pageConfig = landingPageProcess.getPageConfiguration()
    expect(pageConfig.documentId).toEqual(1)
    expect(pageConfig.documentType).toEqual('Whitepaper')
    expect(pageConfig.documentTitle).toEqual('Best practices for microservices')
    expect(pageConfig.documentDescription).toEqual('Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.')
    expect(pageConfig.documentUrl).toEqual('https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf')
  })

  it('Given Landing Page Process class when get new lead then return a Simple Lead Data instance', () => {
    let landingPageProcess = new LandingPageProcess();
    expect(landingPageProcess.getNewLead() != null).toEqual(true)
    expect(typeof landingPageProcess.getNewLead().valueOf()).toEqual('object')
    expect(landingPageProcess.getNewLead() instanceof SimpleLeadData).toEqual(true)
  })

  it('Given Landing Page Process class when get new lead then return a default Simple Lead Data ', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = landingPageProcess.getNewLead()
    expect(lead.firstName).toEqual('')
    expect(lead.lastName).toEqual('')
    expect(lead.company).toEqual('')
    expect(lead.title).toEqual('')
    expect(lead.email).toEqual('')
  })

  it('Given a full Lead data when check if is lead data complete then return true', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = new SimpleLeadData();
    lead.firstName = 'Victor'
    lead.lastName = 'Luna'
    lead.company = 'Newtoms'
    lead.title = 'Developer'
    lead.email = 'victor.luna@newtoms.com'
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(true)
  })

  it('Given a Lead data with empty first name when check if is lead data complete then return false', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = new SimpleLeadData();
    lead.firstName = ''
    lead.lastName = 'Luna'
    lead.company = 'Newtoms'
    lead.title = 'Developer'
    lead.email = 'victor.luna@newtoms.com'
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty last name when check if is lead data complete then return false', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = new SimpleLeadData();
    lead.firstName = 'Victor'
    lead.lastName = ''
    lead.company = 'Newtoms'
    lead.title = 'Developer'
    lead.email = 'victor.luna@newtoms.com'
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty company when check if is lead data complete then return false', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = new SimpleLeadData();
    lead.firstName = 'Victor'
    lead.lastName = 'Luna'
    lead.company = ''
    lead.title = 'Developer'
    lead.email = 'victor.luna@newtoms.com'
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty title when check if is lead data complete then return false', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = new SimpleLeadData();
    lead.firstName = 'Victor'
    lead.lastName = 'Luna'
    lead.company = 'Newtoms'
    lead.title = ''
    lead.email = 'victor.luna@newtoms.com'
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })

  it('Given a Lead data with empty email when check if is lead data complete then return false', () => {
    let landingPageProcess = new LandingPageProcess();
    let lead = new SimpleLeadData();
    lead.firstName = 'Victor'
    lead.lastName = 'Luna'
    lead.company = 'Newtoms'
    lead.title = 'Developer'
    lead.email = ''
    expect(landingPageProcess.isLeadDataComplete(lead)).toEqual(false)
  })
})
