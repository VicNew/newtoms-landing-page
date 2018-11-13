import {SubmitedLeadData} from './SubmitedLeadData'
import {PrivacyPolicyData} from './PrivacyPolicyData'
import {Util} from './Util'

export class LandingPageProcess {
  constructor (landingPageRestClient, landingPageLeadRestClient, landingPageConfigMapper) {
    this.landingPageRestClient = landingPageRestClient
    this.landingPageLeadRestClient = landingPageLeadRestClient
    this.landingPageConfigMapper = landingPageConfigMapper
  }

  getPageConfiguration (landingPageId) {
    return this.transformTemplateConfigResponse(this.getLandingPageTemplateConfig(landingPageId))
  }

  getNewLead () {
    return new SubmitedLeadData()
  }

  isLeadDataComplete (lead) {
    return (lead != null && this.isNotEmptyValue(lead.firstName) && this.isNotEmptyValue(lead.lastName) && this.isNotEmptyValue(lead.company) && this.isNotEmptyValue(lead.title) && this.isValidEmail(lead.email))
  }

  submitLeadData (lead) {
    console.info('Send request for new Lead:', lead)
    this.landingPageLeadRestClient.createANewLead(lead)
    console.info('Sended request for new Lead:' + lead)
    lead.isSubmited = true
  }

  isNotEmptyValue (value) {
    return !Util.isEmptyString(value)
  }

  isValidEmail (email) {
    return (this.isNotEmptyValue(email) && Util.isAValidEmail(email))
  }

  transformTemplateConfigResponse (response) {
    return this.getlandingPageConfigMapper().transformTemplateConfigResponse(response)
  }

  getLandingPageTemplateConfig (landingPageId) {
    return this.landingPageRestClient.getLandingPageTemplateConfigById(landingPageId)
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
