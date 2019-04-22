<template>
  <div class="row">
    <Upload class="col-6" msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="col-6">
      <Result :data="gumiResult" msg="Gumi Vietnam" class="result-card"/>
      <Result :data="googleResult" msg="Gooogle" class="result-card"/>
      <Result :data="microsoftResult" msg="Microsoft" class="result-card"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from '@/components/Upload.vue'
import Result from '@/components/Result.vue'
import { mapActions, mapGetters } from 'vuex'

@Component({
  components: {
    Upload,
    Result,
  },
  methods: {
    ...mapActions(['fetchGumiApi', 'fetchGoogleApi', 'fetchMicrosoftApi']),
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

