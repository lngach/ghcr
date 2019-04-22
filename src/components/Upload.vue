<template>
  <div>
    <form id="file-upload-form" class="uploader">
      <input id="file-upload" type="file" name="fileUpload" accept="image/*">

      <label for="file-upload" id="file-drag">
        <img id="file-image" src="#" alt="Preview" class="hidden">
        <div id="start">
          <i class="fa fa-download" aria-hidden="true"></i>
          <div>Select a file or drag here</div>
          <div id="notimage" class="hidden">Please select an image</div>
          <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
        </div>
        <div id="response" class="hidden">
          <div id="messages"></div>
          <progress class="progress" id="file-progress" value="0">
            <span>0</span>%
          </progress>
        </div>
      </label>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Upload extends Vue {
  @Prop() private imageData!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Imports
//
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
@import url('https://fonts.googleapis.com/css?family=Roboto');

// Vars and Reset
//
$theme: #456574;
$dark-text: #5f6982;

h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  line-height: 1;
  color: $theme;
  margin-bottom: 0;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: $dark-text;
}

.uploader {
  display: block;
  clear: both;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;

  label {
    float: left;
    clear: both;
    width: 100%;
    padding: 2rem 1.5rem;
    text-align: center;
    background: #fff;
    border-radius: 7px;
    border: 3px solid #eee;
    transition: all 0.2s ease;
    user-select: none;

    &:hover {
      border-color: $theme;
    }
    &.hover {
      border: 3px solid $theme;
      box-shadow: inset 0 0 0 6px #eee;

      #start {
        i.fa {
          transform: scale(0.8);
          opacity: 0.3;
        }
      }
    }
  }

  #start {
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
    i.fa {
      font-size: 50px;
      margin-bottom: 1rem;
      transition: all 0.2s ease-in-out;
    }
  }
  #response {
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
    #messages {
      margin-bottom: 0.5rem;
    }
  }

  #file-image {
    margin: 0 auto 0.5rem auto;
    width: 100%;
    &.hidden {
      display: none;
    }
  }

  #notimage {
    display: block;
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
  }

  progress,
  .progress {
    display: inline;
    clear: both;
    margin: 0 auto;
    max-width: 180px;
    border: 0;
    border-radius: 4px;
    background-color: #eee;
    overflow: hidden;
  }

  .progress[value]::-webkit-progress-bar {
    border-radius: 4px;
    background-color: #eee;
  }

  .progress[value]::-webkit-progress-value {
    background: linear-gradient(to right, darken($theme, 8%) 0%, $theme 50%);
    border-radius: 4px;
  }
  .progress[value]::-moz-progress-bar {
    background: linear-gradient(to right, darken($theme, 8%) 0%, $theme 50%);
    border-radius: 4px;
  }

  input[type='file'] {
    display: none;
  }

  div {
    margin: 0 0 0.5rem 0;
    color: $dark-text;
  }
  .btn {
    display: inline-block;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    clear: both;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    text-transform: initial;
    border: none;
    border-radius: 0.2rem;
    outline: none;
    padding: 0 1rem;
    height: 36px;
    line-height: 36px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: $theme;
    border-color: $theme;
    cursor: pointer;
  }
}
</style>
