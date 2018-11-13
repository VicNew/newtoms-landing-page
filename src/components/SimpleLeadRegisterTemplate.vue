<template>
    <form>
        <app-simple-lead-input-form :lead="lead"></app-simple-lead-input-form>
        <div class="form-row">
            <div class="col-md-12 col-lg-12 col-xl-12" v-if="isLeadDataComplete() && lead.isSubmited">
                <a :href="config.documentUrl"  target="_blank" class="btn btn-block btn-lg btn-primary active" role="button" aria-pressed="true"> Download </a>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-12 col-lg-12 col-xl-12" v-if="!lead.isSubmited && isLeadDataComplete()">
                <a href="#" class="btn btn-block btn-lg btn-primary active" @click.self.prevent="submitLead()"> Submit </a>
            </div>
        </div>
    </form>
</template>

<script>
import SimpleLeadInputForm from './SimpleLeadInputForm.vue'
export default {
  inject: ['isLeadDataComplete', 'submitLead'],
  props: ['lead', 'config'],
  components: {
    appSimpleLeadInputForm: SimpleLeadInputForm
  }
}
</script>
