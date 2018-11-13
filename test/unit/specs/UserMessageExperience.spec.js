import {UserMessageExperience} from '@/js/UserMessageExperience'

describe ('UserMessageExperience Test Suit', () => {
    var userMessageExperience = {}
    beforeEach (() => {
        userMessageExperience = new UserMessageExperience(UserMessageExperience.INFO_MSG_TYPE, 'Info!', 'Indicates a neutral informative change or action.')
    })

    it('Given a UserMessageExperience class When create a new object then return a valid instance', () => {
        expect(userMessageExperience).not.toBe(null)
        expect(userMessageExperience instanceof Object).toBeTruthy()
        expect(userMessageExperience instanceof UserMessageExperience).toBeTruthy()
    })

    it('Given a UserMessageExperience class When create a new instance then it has default values', () => {
        expect(userMessageExperience.messageType).toEqual(UserMessageExperience.INFO_MSG_TYPE)
        expect(userMessageExperience.statusText).toEqual('Info!')
        expect(userMessageExperience.description).toEqual('Indicates a neutral informative change or action.')
        expect(userMessageExperience.fullDescription).toEqual('')
        expect(userMessageExperience.showMessage).toEqual(false)
        expect(userMessageExperience.showFullDescription).toEqual(false)
    })

    it('Given a created UserMessageExperience class instance When modify some field values then default values are changed', () => {
        userMessageExperience.messageType = UserMessageExperience.SUCCESS_MSG_TYPE
        userMessageExperience.statusText = 'changed'
        userMessageExperience.description = 'description changed'
        userMessageExperience.fullDescription = 'fullDescription changed'
        userMessageExperience.showMessage = true
        userMessageExperience.showFullDescription = true
        expect(userMessageExperience.messageType).toEqual(UserMessageExperience.SUCCESS_MSG_TYPE)
        expect(userMessageExperience.statusText).toEqual('changed')
        expect(userMessageExperience.description).toEqual('description changed')
        expect(userMessageExperience.fullDescription).toEqual('fullDescription changed')
        expect(userMessageExperience.showMessage).toEqual(true)
        expect(userMessageExperience.showFullDescription).toEqual(true)
    })

    it('Given a UserMessageExperience class When select amessage type then return a valid type value', () => {
        expect(UserMessageExperience.SUCCESS_MSG_TYPE).toEqual('success')
        expect(UserMessageExperience.INFO_MSG_TYPE).toEqual('info')
        expect(UserMessageExperience.WARNING_MSG_TYPE).toEqual('warning')
        expect(UserMessageExperience.DANGER_MSG_TYPE).toEqual('danger')
    })

})