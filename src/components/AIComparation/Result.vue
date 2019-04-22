<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-details">
        <h1 class="card-head">
          <small class="text-muted">{{msg}}</small>
        </h1>
        <h3>
          <small class="text-muted">{{data}}</small>
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Result extends Vue {
  @Prop() private msg!: string
  @Prop() private data!: string
}
</script>

<style lang="scss" scoped>
.clearfix:before,
.clearfix:after {
  content: ' ';
  display: table;
}

h1 .text-muted {
  color: #d3394c !important;
  font-weight: bold;
}
.clearfix:after {
  clear: both;
}

.card {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.card-media {
  width: 100%;
}

.card-details {
  padding: 5px 15px;
}

.card-head {
  font-weight: 400;
}

.card-head {
  font-size: 26px;
  margin-bottom: 15px;
}

.card-action-button {
  border-radius: 2px;
  color: #ffab40;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  margin: 0;
  padding: 10px;
  text-decoration: none;
}

.card-action-button:hover {
  background-color: rgba(255, 168, 58, 0.2);
}
</style>


