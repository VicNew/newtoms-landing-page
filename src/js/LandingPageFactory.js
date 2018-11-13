import {AppConfig} from './LandingPageAppConfig'
import {LandingPageUserMessageProcess} from './LandingPageUserMessageProcess'
import {LandingPageSimpleRestClient} from '@/js/LandingPageSimpleRestClient'
import {LandingPageLeadRestClient} from './LandingPageLeadRestClient'
import {LandingPageConfigMapper} from './LandingPageConfigMapper'
import {UserMessageExperience} from './UserMessageExperience'

export class LandingPageFactory {
  getLandingPageRestApiBaseUrl () {
    return AppConfig.landingPageRestClient.baseUrl
  }

  getLandingPageRestClient () {
    return new LandingPageSimpleRestClient(this.getLandingPageRestApiBaseUrl())
  }

  getLandingPageProcess () {
    return new LandingPageUserMessageProcess(this.getLandingPageRestClient(), this.getLandingPageLeadRestClient(), this.getLandingPageConfigMapper())
  }

  getLandingPageConfigMapper () {
    return new LandingPageConfigMapper()
  }

  getLandingPageLeadRestClient () {
    return new LandingPageLeadRestClient(this.getLandingPageRestApiBaseUrl())
  }

  getUserMessageExperience () {
    return new UserMessageExperience(UserMessageExperience.INFO_MSG_TYPE, 'Info!', '')
  }
}
