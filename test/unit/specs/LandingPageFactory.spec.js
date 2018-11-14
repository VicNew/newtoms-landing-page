import {LandingPageFactory} from '@/js/LandingPageFactory'
import {LandingPageSimpleRestClient} from '@/js/LandingPageSimpleRestClient'
import {LandingPageLeadRestClient} from '@/js/LandingPageLeadRestClient'
import {LandingPageProcess} from '@/js/LandingPageProcess'
import {LandingPageUserMessageProcess} from '@/js/LandingPageUserMessageProcess'
import {LandingPageConfigMapper} from '@/js/LandingPageConfigMapper'
import {UserMessageExperience} from '@/js/UserMessageExperience'

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
        expect(landingPageFactory.getLandingPageRestApiBaseUrl()).toEqual('https://newtoms-landingpage-process-api.us-e1.cloudhub.io/api')
    })

    it('Given a Landing Page Factory when get Landing Page Rest Client then return the right instance', () => {
        expect(landingPageFactory.getLandingPageRestClient()).not.toBe(null)
        expect(landingPageFactory.getLandingPageRestClient() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageRestClient() instanceof LandingPageSimpleRestClient).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Rest Client then use the right service url', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageRestApiBaseUrl').and.callThrough()
        let restClient = landingPageFactorySpy.getLandingPageRestClient()
        expect(restClient).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageRestApiBaseUrl).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get Landing Page Process class then return the right instance', () => {
        expect(landingPageFactory.getLandingPageProcess()).not.toBe(null)
        expect(landingPageFactory.getLandingPageProcess() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageProcess() instanceof LandingPageProcess).toBeTruthy()
        expect(landingPageFactory.getLandingPageProcess() instanceof LandingPageUserMessageProcess).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Config Mapper class then return the right instance', () => {
        expect(landingPageFactory.getLandingPageConfigMapper()).not.toBe(null)
        expect(landingPageFactory.getLandingPageConfigMapper() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageConfigMapper() instanceof LandingPageConfigMapper).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Process class then use the right Rest Client', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageRestClient').and.callThrough()
        let process = landingPageFactorySpy.getLandingPageProcess()
        expect(process).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageRestClient).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get Landing Page Process class then use the right Lead Rest Client', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageLeadRestClient').and.callThrough()
        let process = landingPageFactorySpy.getLandingPageProcess()
        expect(process).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageLeadRestClient).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get Landing Page Process class then use the right Mapper', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageConfigMapper').and.callThrough()
        let process = landingPageFactorySpy.getLandingPageProcess()
        expect(process).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageConfigMapper).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get Landing Page Lead Rest Client then return the right instance', () => {
        expect(landingPageFactory.getLandingPageLeadRestClient()).not.toBe(null)
        expect(landingPageFactory.getLandingPageLeadRestClient() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getLandingPageLeadRestClient() instanceof LandingPageLeadRestClient).toBeTruthy()
    })

    it('Given a Landing Page Factory when get Landing Page Lead Rest Client then use the right service url', () => {
        let landingPageFactorySpy = new LandingPageFactory()
        spyOn(landingPageFactorySpy, 'getLandingPageRestApiBaseUrl').and.callThrough()
        let restClient = landingPageFactorySpy.getLandingPageLeadRestClient()
        expect(restClient).not.toBe(null)
        expect(landingPageFactorySpy.getLandingPageRestApiBaseUrl).toHaveBeenCalled()
    })

    it('Given a Landing Page Factory when get User Message Experience class then return the right instance', () => {
        expect(landingPageFactory.getUserMessageExperience()).not.toBe(null)
        expect(landingPageFactory.getUserMessageExperience() instanceof Object).toBeTruthy()
        expect(landingPageFactory.getUserMessageExperience() instanceof UserMessageExperience).toBeTruthy()
    })
    it('Given a Landing Page Factory when get User Message Experience class then return the right instance with default values', () => {
        var userMessageExperience = landingPageFactory.getUserMessageExperience()
        expect(userMessageExperience.messageType).toEqual(UserMessageExperience.INFO_MSG_TYPE)
        expect(userMessageExperience.statusText).toEqual('Info!')
        expect(userMessageExperience.description).toEqual('')
        expect(userMessageExperience.fullDescription).toEqual('')
        expect(userMessageExperience.showMessage).toEqual(false)
        expect(userMessageExperience.showFullDescription).toEqual(false)
    })
})
