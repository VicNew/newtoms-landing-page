import {AppConfig} from './LandingPageAppConfig'
import {LandingPageProcess} from './LandingPageProcess'
import {LandingPageRestClientWithErrorHandler} from './LandingPageRestClientWithErrorHandler'
import {LandingPageConfigMapper} from './LandingPageConfigMapper'

export class LandingPageFactory {
  getLandingPageRestApiBaseUrl () {
    return AppConfig.landingPageRestClient.baseUrl
  }

  getLandingPageRestClient () {
    return new LandingPageRestClientWithErrorHandler(this.getLandingPageRestApiBaseUrl())
  }

  getLandingPageProcess () {
    return new LandingPageProcess(this.getLandingPageRestClient(), this.getLandingPageConfigMapper())
  }

  getLandingPageConfigMapper () {
    return new LandingPageConfigMapper()
  }
}
