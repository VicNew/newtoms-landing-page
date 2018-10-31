import {AppConfig} from './LandingPageAppConfig'
import {LandingPageProcess} from './LandingPageProcess'
import {LandingPageRestClientWithErrorHandler} from './LandingPageRestClientWithErrorHandler'
import {LandingPageConfigMapper} from './LandingPageConfigMapper'

export class LandingPageFactory {
    constructor () {

    }

    getLandingPageRestApiBaseUrl () {
        return AppConfig.landingPageRestClient.baseUrl
    }

    getLandingPageRestClient() {
        return new LandingPageRestClientWithErrorHandler(this.getLandingPageRestApiBaseUrl(), this.getLandingPageConfigMapper())
    }

    getLandingPageProcess () {
        return new LandingPageProcess()
    }

    getLandingPageConfigMapper () {
        return new LandingPageConfigMapper()
    }
}