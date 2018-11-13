<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <app-document-info-template :config="config"></app-document-info-template>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="border border-primary" style="padding: 10px;">
            <user-message-template :userMessage="userMessage"></user-message-template>
            <app-simple-lead-register-template :lead="lead"></app-simple-lead-register-template>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {LandingPageFactory} from '../js/LandingPageFactory'
import DocumentInfoTemplate from './DocumentInfoTemplate.vue'
import SimpleLeadRegisterTemplate from './SimpleLeadRegisterTemplate.vue'
import UserMessageTemplate from './UserMessageTemplate.vue'
export default {
  name: 'LandingPageTemplate',
  data: function () {
    return {
      config: {},
      lead: {},
      userMessage: {},
      landingPageProcess: {},
      landingPageFactory: {}
    }
  },
  provide: function () {
    return {
      isLeadDataComplete: this.isLeadDataComplete,
      submitLead: this.submitLead,
      isASuccessMessage: this.isASuccessMessage,
      isAnInfoMessage: this.isAnInfoMessage,
      isAWarningMessage: this.isAWarningMessage,
      isADangerMessage: this.isADangerMessage
    }
  },
  methods: {
    isLeadDataComplete: function () {
      return this.landingPageProcess.isLeadDataComplete(this.lead, this.userMessage)
    },
    submitLead: function () {
      this.landingPageProcess.submitLeadData(this.lead)
    },
    isASuccessMessage: function () {
      return this.landingPageProcess.isASuccessMessage(this.userMessage)
    },
    isAnInfoMessage: function () {
      return this.landingPageProcess.isAnInfoMessage(this.userMessage)
    },
    isAWarningMessage: function () {
      return this.landingPageProcess.isAWarningMessage(this.userMessage)
    },
    isADangerMessage: function () {
      return this.landingPageProcess.isADangerMessage(this.userMessage)
    }
  },
  components: {
    appDocumentInfoTemplate: DocumentInfoTemplate,
    appSimpleLeadRegisterTemplate: SimpleLeadRegisterTemplate,
    userMessageTemplate: UserMessageTemplate
  },
  created () {
    this.landingPageFactory = new LandingPageFactory()
    this.landingPageProcess = this.landingPageFactory.getLandingPageProcess()
    this.userMessage = this.landingPageFactory.getUserMessageExperience()
    this.config = this.landingPageProcess.getPageConfiguration()
    this.lead = this.landingPageProcess.getNewLead()
  }
}
</script>
