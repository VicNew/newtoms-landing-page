import {SubmitedLeadData} from './SubmitedLeadData'
import {PrivacyPolicyData} from './PrivacyPolicyData'
import {Util} from './Util'

export class LandingPageProcess {
  constructor (landingPageRestClient, landingPageLeadRestClient, landingPageConfigMapper) {
    this.landingPageRestClient = landingPageRestClient
    this.landingPageLeadRestClient = landingPageLeadRestClient
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
    this.landingPageLeadRestClient.createANewLead(lead)
    lead.isSubmited = true
  }

  isNotEmptyValue (value) {
    return !Util.isEmptyString(value)
  }

  transformTemplateConfigResponse (response) {
    return this.getlandingPageConfigMapper().transformTemplateConfigResponse(response)
  }

  getLandingPageTemplateConfig () {
    return this.landingPageRestClient.getLandingPageTemplateConfigById(1)
  }

  getlandingPageConfigMapper () {
    return this.landingPageConfigMapper
  }

  getPrivacyPolicyData () {
    return new PrivacyPolicyData()
  }

  switchPrivacyPolicy (privacyPolicyData) {
    privacyPolicyData.isPrivatePolicyVisible = !privacyPolicyData.isPrivatePolicyVisible
  }

  selectPrivacyPolicyLanguage (privacyPolicyData, language) {
    privacyPolicyData.selectedLanguage = language
  }
}
