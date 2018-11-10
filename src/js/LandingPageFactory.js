import {AppConfig} from './LandingPageAppConfig'
import {LandingPageProcess} from './LandingPageProcess'
import {LandingPageSimpleRestClient} from '@/js/LandingPageSimpleRestClient'
import {LandingPageLeadRestClient} from './LandingPageLeadRestClient'
import {LandingPageConfigMapper} from './LandingPageConfigMapper'

export class LandingPageFactory {
  getLandingPageRestApiBaseUrl () {
    return AppConfig.landingPageRestClient.baseUrl
  }

  getLandingPageRestClient () {
    return new LandingPageSimpleRestClient(this.getLandingPageRestApiBaseUrl())
  }

  getLandingPageProcess () {
    return new LandingPageProcess(this.getLandingPageRestClient(), this.getLandingPageLeadRestClient(), this.getLandingPageConfigMapper())
  }

  getLandingPageConfigMapper () {
    return new LandingPageConfigMapper()
  }

  getLandingPageLeadRestClient () {
    return new LandingPageLeadRestClient(this.getLandingPageRestApiBaseUrl())
  }
}
