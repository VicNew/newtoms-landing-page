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
      <div class="row">
        <div class="col-md-12">
          <p>First Name: {{lead.firstName}}</p>
          <p>isLeadDataComplete: {{isLeadDataComplete()}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import {LandingPageProcess} from '../js/LandingPageProcess'
import DocumentInfoTemplate from './DocumentInfoTemplate.vue'
import SimpleLeadRegisterTemplate from './SimpleLeadRegisterTemplate.vue'
export default {
  name: 'LandingPageTemplate',
  data: function () {
    return {
      config: {},
      lead: {},
      landingPageProcess: {}
    }
  },
  provide: function () {
    return {
      isLeadDataComplete: this.isLeadDataComplete
    }
  },
  methods: {
    isLeadDataComplete: function () {
      return this.landingPageProcess.isLeadDataComplete(this.lead)
    }
  },
  components: {
    appDocumentInfoTemplate: DocumentInfoTemplate,
    appSimpleLeadRegisterTemplate: SimpleLeadRegisterTemplate
  },
  created () {
    this.landingPageProcess = new LandingPageProcess()
    this.config = this.landingPageProcess.getPageConfiguration()
    this.lead = this.landingPageProcess.getNewLead()
  }
}
</script>
