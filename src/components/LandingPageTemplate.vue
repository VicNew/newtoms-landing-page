<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <app-document-info-template :config="config"></app-document-info-template>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="border border-primary" style="padding: 10px;">
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
export default {
  name: 'LandingPageTemplate',
  data: function () {
    return {
      config: {},
      lead: {},
      landingPageProcess: {},
      landingPageFactory: {}
    }
  },
  provide: function () {
    return {
      isLeadDataComplete: this.isLeadDataComplete,
      submitLead: this.submitLead
    }
  },
  methods: {
    isLeadDataComplete: function () {
      return this.landingPageProcess.isLeadDataComplete(this.lead)
    },
    submitLead: function () {
      this.landingPageProcess.submitLeadData(this.lead)
    }
  },
  components: {
    appDocumentInfoTemplate: DocumentInfoTemplate,
    appSimpleLeadRegisterTemplate: SimpleLeadRegisterTemplate
  },
  created () {
    this.landingPageFactory = new LandingPageFactory()
    this.landingPageProcess = this.landingPageFactory.getLandingPageProcess()
    this.config = this.landingPageProcess.getPageConfiguration()
    this.lead = this.landingPageProcess.getNewLead()
  }
}
</script>
