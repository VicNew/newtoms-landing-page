<template>
  <section v-if="userMessage.showMessage">
    <div class="alert alert-success" v-if="isASuccessMessage()">
      <strong>{{userMessage.statusText}}</strong> {{userMessage.description}}
    </div>
    <div class="alert alert-info" v-if="isAnInfoMessage()">
      <strong>{{userMessage.statusText}}</strong> {{userMessage.description}}
    </div>
    <div class="alert alert-warning" v-if="isAWarningMessage()">
      <strong>{{userMessage.statusText}}</strong> {{userMessage.description}}
    </div>
    <div class="alert alert-danger" v-if="isADangerMessage()">
      <strong>{{userMessage.statusText}}</strong> {{userMessage.description}}
    </div>
  </section>
</template>

<script>
export default {
  inject: ['isASuccessMessage', 'isAnInfoMessage', 'isAWarningMessage', 'isADangerMessage'],
  props: ['userMessage']
}
</script>
