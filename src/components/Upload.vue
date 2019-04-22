<template>
  <div>
    <div class="helper"></div>
    <!--
    -->
    <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
      <div class="helper"></div>
      <!--
      -->
      <label v-if="!imageData" class="btn display-inline">
        SELECT OR DROP AN IMAGE
        <input type="file" name="image" @change="onChange">
      </label>
      <!--
      -->
      <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
        <img :src="imageData" alt class="img">
        <br>
        <br>
        <button class="btn" @click="removeFile">REMOVE</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'

@Component({
  methods: {
    ...mapActions(['fetchGumiApi', 'fetchGoogleApi', 'fetchMicrosoftApi']),
  },
  computed: {
    ...mapGetters(['imageData']),
  },
})
export default class Upload extends Vue {
  public callAPi(file: string) {
    ;(this as any).fetchGumiApi(file)
    ;(this as any).fetchGoogleApi(file)
    ;(this as any).fetchMicrosoftApi(file)
  }

  private onDrop(e: any) {
    e.stopPropagation()
    e.preventDefault()
    const files = e.dataTransfer.files
    this.createFile(files[0])
    this.callAPi((this as any).imageData)
  }
  private onChange(e: any) {
    const files = e.target.files
    this.createFile(files[0])
    this.callAPi((this as any).imageData)
  }

  private createFile(file: File) {
    if (!file.type.match('image.*')) {
      alert('Select an image')
      return
    }
    const img = new Image()
    const reader = new FileReader()
    const vm = this
    reader.onload = (e: any) => {
      ;(vm as any).$store.commit('setImageData', e.target.result)
    }
    reader.readAsDataURL(file)
  }

  private removeFile() {
    ;(this as any).$store.commit('setImageData', '')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  font-family: 'Arial';
  font-size: 12px;
}

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
}

.btn {
  background-color: #d3394c;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  padding: 15px 35px;
  position: relative;
}

.btn:hover {
  background-color: #722040;
}

input[type='file'] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.align-center {
  text-align: center;
}

.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
}

.hidden {
  display: none !important;
}

.hidden.image {
  display: inline-block !important;
}

.display-inline {
  display: inline-block;
  vertical-align: middle;
}

.img {
  border: 1px solid #f6f6f6;
  display: inline-block;
  height: auto;
  max-height: 80%;
  max-width: 80%;
  width: auto;
}

.drop {
  background-color: #f2f2f2;
  border: 4px dashed #ccc;
  background-color: #f6f6f6;
  border-radius: 2px;
  height: 100%;
  min-height: 400px;
  max-width: 600px;
  width: 100%;
}
</style>
