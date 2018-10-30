<template>
    <section style="font-family: 'Ubuntu Condensed', sans-serif !important; font-size: 20px !important;">
        <div class="form-row">
            <div class="col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label class="control-label" for="firstName">First Name *</label>
                    <input v-model="lead.firstName" type="text" id="firstName" class="form-control" placeholder="Enter your name...">
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="lastName" class="text-left">Last Name *</label>
                    <input v-model="lead.lastName" type="text" id="lastName" class="form-control" placeholder="Enter your last name...">
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="company">Company *</label>
                    <input v-model="lead.company" type="text" id="company" class="form-control" placeholder="Enter your company...">
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="title">Title *</label>
                    <input v-model="lead.title" type="text" id="title" class="form-control" placeholder="Enter your title...">
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input v-model="lead.email" type="email" id="email" class="form-control" placeholder="Enter your email...">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['lead']
}
</script>
