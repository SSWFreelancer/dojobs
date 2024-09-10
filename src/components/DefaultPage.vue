<template>
  <div class="default">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Default extends Vue {}
</script>

<style lang="sass" scoped>
.default
    font-size: 28px
    font-weight: 700
    text-align: center
</style>