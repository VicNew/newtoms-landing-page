<template>
    <section style="font-family: 'Ubuntu Condensed', sans-serif !important; font-size: 20px !important;">
        <div class="well well-sm" style="border-left: solid 4px #3498db; padding-left: 20px;">
            <p class="text-left">{{config.documentType}}</p>
            <h1 class="text-left text-success" style="font-family: 'Ubuntu Condensed', sans-serif !important; font-size: 60px !important;">{{config.documentTitle}}</h1>
            <br><br>
        </div>
        <br><br>
        <p class="text-left text-justify">
            {{config.documentDescription}}
        </p>
    </section>
</template>

<script>
export default {
  props: ['config']
}
</script>
