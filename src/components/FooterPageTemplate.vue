<template>
    <section>
        <footer class="footer bg-light">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <a href="https://www.newtoms.com/our-story/#Story" target="_blank">About</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="https://www.newtoms.com/contact/" target="_blank">Contact</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="#">Terms of Use</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="#" @click="switchPrivacyPolicy()">Privacy Policy</a>
                        </li>
                    </ul>
                <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
                </div>
                <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                    <a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.newtoms.com%2Four-story%2F&linkname=Our%20Story%20%26%20our%20People&linknote=" target="_blank">
                        <i class="fab fa-facebook fa-2x fa-fw"></i>
                    </a>
                    </li>
                    <li class="list-inline-item mr-3">
                    <a href="https://twitter.com/Newtoms" target="_blank">
                        <i class="fab fa-twitter-square fa-2x fa-fw"></i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                    <a href="https://www.linkedin.com/company/newtoms-llc" target="_blank">
                        <i class="fab fa-linkedin fa-2x fa-fw"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
  name: 'FooterPageTemplate',
  inject: ['switchPrivacyPolicy'],
  props: ['privacyPolicyData']
}
</script>
