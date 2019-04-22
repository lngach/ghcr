<template>
  <AIComparation/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AIComparation from '@/components/AIComparation/index.vue'

@Component({
  components: {
    AIComparation,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.result-card {
  margin-bottom: 10px;
}
</style>

