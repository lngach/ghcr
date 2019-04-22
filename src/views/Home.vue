<template>
  <div class="row">
    <Upload class="col-lg-6" msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="col-lg-6">
      <Result :data="gumiResult" msg="Gumi Vietnam" class="result-card"/>
      <Result :data="googleResult" msg="Google" class="result-card"/>
      <Result :data="microsoftResult" msg="Microsoft" class="result-card"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from '@/components/Upload.vue'
import Result from '@/components/Result.vue'
import { mapGetters } from 'vuex'

@Component({
  components: {
    Upload,
    Result,
  },
  computed: {
    ...mapGetters(['gumiResult', 'googleResult', 'microsoftResult']),
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.result-card {
  margin-bottom: 10px;
}
</style>

