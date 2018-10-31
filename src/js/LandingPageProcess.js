import {LandingPageConfig} from './LandingPageConfig'
import {SubmitedLeadData} from './SubmitedLeadData'
import {Util} from './Util'

export class LandingPageProcess {
  constructor (landingPageRestClient, landingPageConfigMapper) {
    this.landingPageRestClient = landingPageRestClient
    this.landingPageConfigMapper = landingPageConfigMapper
  }

  getPageConfiguration () {
    return this.transformTemplateConfigResponse(this.getLandingPageTemplateConfig())
  }

  getNewLead () {
    return new SubmitedLeadData()
  }

  isLeadDataComplete (lead) {
    return (lead != null && this.isNotEmptyValue(lead.firstName) && this.isNotEmptyValue(lead.lastName) && this.isNotEmptyValue(lead.company) && this.isNotEmptyValue(lead.title) && this.isNotEmptyValue(lead.email))
  }

  submitLeadData (lead) {
    console.info('Submiting lead: ' + lead)
    console.info('Successfully!')
    lead.isSubmited = true
  }

  isNotEmptyValue (value) {
    return !Util.isEmptyString(value)
  }

  transformTemplateConfigResponse(response) {
    return this.getlandingPageConfigMapper().transformTemplateConfigResponse(response)
  }

  getLandingPageTemplateConfig () {
    return this.landingPageRestClient.getLandingPageTemplateConfigById(1)
  }

  getlandingPageConfigMapper () {
    return this.landingPageConfigMapper
  }
}
