<template>
    <section class="text-justify text-muted bg-black">
        <ul class="list-inline mb-2">
          <li class="list-inline-item"> </li>
          <li class="list-inline-item"> </li>
          <li class="list-inline-item"> </li>
          <li class="list-inline-item">
            <a href="#" @click="switchPrivacyPolicy()">
              <i class="fas fa-angle-double-left fa-1x fa-fw"></i>
              Back
            </a>
          </li>
          <li class="list-inline-item">|</li>
          <li class="list-inline-item">
            <a href="#" @click="selectPrivacyPolicyEnglish()">English</a>
          </li>
          <li class="list-inline-item">|</li>
          <li class="list-inline-item">
            <a href="#" @click="selectPrivacyPolicySpanish()">Spanish</a>
          </li>
        </ul>
        <privacyPolicyEnTemplate v-if="privacyPolicyData.selectedLanguage == 'En'"></privacyPolicyEnTemplate>
        <privacyPolicyEspTemplate v-if="privacyPolicyData.selectedLanguage == 'Esp'"></privacyPolicyEspTemplate>
    </section>
</template>

<script>
import PrivacyPolicyEnTemplate from './PrivacyPolicyEnTemplate'
import PrivacyPolicyEspTemplate from './PrivacyPolicyEspTemplate'

export default {
  name: 'PrivacyPolicyTemplate',
  inject: ['switchPrivacyPolicy', 'selectPrivacyPolicyEnglish', 'selectPrivacyPolicySpanish'],
  props: ['privacyPolicyData'],
  components: {
    privacyPolicyEnTemplate: PrivacyPolicyEnTemplate,
    privacyPolicyEspTemplate: PrivacyPolicyEspTemplate
  }
}
</script>
