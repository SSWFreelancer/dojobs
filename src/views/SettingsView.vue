<template>
    <DefaultPage>
        Страница параметров
    </DefaultPage>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultPage from "@/components/DefaultPage.vue";
@Component({
  components: {
    DefaultPage
  }
})
export default class SettingsView extends Vue {}
</script>