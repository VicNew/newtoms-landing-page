<template>
    <section>
      <navigation-bar-template></navigation-bar-template>
      <!-- Masthead -->
      <header class="masthead text-white text-center" v-if="!privacyPolicyData.isPrivatePolicyVisible">
        <landing-page-template></landing-page-template>
      </header>
      <section v-if="privacyPolicyData.isPrivatePolicyVisible">
          <privacyPolicyTemplate :privacyPolicyData="privacyPolicyData"></privacyPolicyTemplate>
      </section>
      <!-- Footer -->
      <footer-page-template :privacyPolicyData="privacyPolicyData"></footer-page-template>
    </section>
</template>

<script>
import NavigationBarTemplate from './NavigationBarTemplate'
import LandingPageTemplate from './LandingPageTemplate'
import PrivacyPolicyTemplate from './PrivacyPolicyTemplate'
import FooterPageTemplate from './FooterPageTemplate'
import {LandingPageFactory} from '../js/LandingPageFactory'

export default {
  name: 'IndexTemplate',
  data: function () {
    return {
      privacyPolicyData: {},
      landingPageProcess: {},
      landingPageFactory: {}
    }
  },
  provide: function () {
    return {
      switchPrivacyPolicy: this.switchPrivacyPolicy,
      selectPrivacyPolicyEnglish: this.selectPrivacyPolicyEnglish,
      selectPrivacyPolicySpanish: this.selectPrivacyPolicySpanish
    }
  },
  methods: {
    switchPrivacyPolicy: function () {
      this.landingPageProcess.switchPrivacyPolicy(this.privacyPolicyData)
    },
    selectPrivacyPolicyEnglish: function () {
      this.landingPageProcess.selectPrivacyPolicyLanguage(this.privacyPolicyData, 'En')
    },
    selectPrivacyPolicySpanish: function () {
      this.landingPageProcess.selectPrivacyPolicyLanguage(this.privacyPolicyData, 'Esp')
    }
  },
  components: {
    landingPageTemplate: LandingPageTemplate,
    navigationBarTemplate: NavigationBarTemplate,
    footerPageTemplate: FooterPageTemplate,
    privacyPolicyTemplate: PrivacyPolicyTemplate
  },
  created () {
    this.landingPageFactory = new LandingPageFactory()
    this.landingPageProcess = this.landingPageFactory.getLandingPageProcess()
    this.privacyPolicyData = this.landingPageProcess.getPrivacyPolicyData()
  }
}
</script>
