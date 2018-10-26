<template>
    <form>
        <app-simple-lead-input-form :lead="lead"></app-simple-lead-input-form>
        <div class="form-row">
            <div class="col-md-12 col-lg-12 col-xl-12" v-if="isLeadDataComplete()">
                <a href="https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf" target="_blank" class="btn btn-block btn-lg btn-primary active" role="button" aria-pressed="true"> Download </a>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-12 col-lg-12 col-xl-12" v-if="!isLeadDataComplete()">
                <a href="#" class="btn btn-block btn-lg btn-secondary disable"> Download </a>
            </div>
        </div>
    </form>
</template>

<script>
import SimpleLeadInputForm from './SimpleLeadInputForm.vue'
export default {
  inject: ['isLeadDataComplete'],
  props: ['lead'],
  components: {
    appSimpleLeadInputForm: SimpleLeadInputForm
  }
}
</script>
