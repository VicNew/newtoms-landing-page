import {LandingPageConfig} from './LandingPageConfig'
import {SimpleLeadData} from './SimpleLeadData'
import {Util} from './Util'
export class LandingPageProcess {
  getPageConfiguration () {
    var pageConfig = new LandingPageConfig()
    pageConfig.documentId = 1
    pageConfig.documentType = 'Whitepaper'
    pageConfig.documentTitle = 'Best practices for microservices'
    pageConfig.documentDescription = 'Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.'
    pageConfig.documentUrl = 'https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf'
    return pageConfig
  }

  getNewLead () {
    return new SimpleLeadData()
  }

  isLeadDataComplete (lead) {
    return (lead != null && this.isNotEmptyValue(lead.firstName) && this.isNotEmptyValue(lead.lastName) && this.isNotEmptyValue(lead.company) && this.isNotEmptyValue(lead.title) && this.isNotEmptyValue(lead.email))
  }

  isNotEmptyValue (value) {
    return !Util.isEmptyString(value)
  }
}
