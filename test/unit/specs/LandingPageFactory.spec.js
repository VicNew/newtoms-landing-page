import {LandingPageFactory} from '@/js/LandingPageFactory'
import {LandingPageRestClientWithErrorHandler} from '@/js/LandingPageRestClientWithErrorHandler'
import {LandingPageProcess} from '@/js/LandingPageProcess'
import {LandingPageConfigMapper} from '@/js/LandingPageConfigMapper'

describe('Landing Page Factory', () => {
    var landingPageFactory = {}
    beforeEach (() => {
        landingPageFactory = new LandingPageFactory()
    })

    it('Given a LandingPageFactory class create a new instance', () => {
        expect(landingPageFactory).not.toBe(null)
        expect(landingPageFactory instanceof Object).toBeTruthy()
        expect(landingPageFactory instanceof LandingPageFactory).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Rest Api Base Url then return the right url', () => {
        expect(landingPageFactory.getLandingPageRestApiBaseUrl()).toEqual('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
    })

    it('Given a Landing Page Factory when get Landing Page Rest Client then return the right instance', () => {
        expect(landingPageFactory.getLandingPageRestClient()).not.toBe(null)
        expect(landingPageFactory.getLandingPageRestClient() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageRestClient() instanceof LandingPageRestClientWithErrorHandler).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Rest Client then use the right service url', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageRestApiBaseUrl').and.callThrough()
        let restClient = landingPageFactorySpy.getLandingPageRestClient()
        expect(restClient).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageRestApiBaseUrl).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get Landing Page Rest Client then use the right mapper', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageConfigMapper').and.callThrough()
        let restClient = landingPageFactorySpy.getLandingPageRestClient()
        expect(restClient).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageConfigMapper).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get Landing Page Process class then return the right instance', () => {
        expect(landingPageFactory.getLandingPageProcess()).not.toBe(null)
        expect(landingPageFactory.getLandingPageProcess() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageProcess() instanceof LandingPageProcess).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Config Mapper class then return the right instance', () => {
        expect(landingPageFactory.getLandingPageConfigMapper()).not.toBe(null)
        expect(landingPageFactory.getLandingPageConfigMapper() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageConfigMapper() instanceof LandingPageConfigMapper).toBeTruthy()
    })

})
