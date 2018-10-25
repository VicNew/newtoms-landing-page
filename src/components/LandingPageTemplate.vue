<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <div class="well well-sm" style="border-left: solid 4px #3498db; padding-left: 20px;">
              <p class="text-left">Whitepaper:</p>
              <h1 class="text-left text-success">Best practices for microservices</h1>
              <br><br>
            </div>
            <br><br>
            <p class="text-left text-justify font-weight-bold">
              Today's business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it's important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.
            </p>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
          <div class="border border-primary" style="padding: 10px;">
            <form>
              <div class="form-row">
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="form-group">
                    <label class="control-label" for="firstName">First Name *</label>
                    <input type="text" id="firstName" class="form-control" placeholder="Enter your name...">
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="form-group">
                    <label for="lastName" class="text-left">Last Name *</label>
                    <input type="text" id="lastName" class="form-control" placeholder="Enter your last name...">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="form-group">
                    <label for="company">Company *</label>
                    <input type="text" id="company" class="form-control" placeholder="Enter your company...">
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="form-group">
                    <label for="title">Title *</label>
                    <input type="text" id="title" class="form-control" placeholder="Enter your title...">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" class="form-control" placeholder="Enter your email...">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                  <a href="https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf" target="_blank" class="btn btn-block btn-lg btn-primary active" role="button" aria-pressed="true"> Download </a>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                  <a href="#" class="btn btn-block btn-lg btn-secondary disable">
                    <span class="glyphicon glyphicon-star"></span> Download
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LandingPageTemplate',
  data: function () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
