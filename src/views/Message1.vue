<template>
    <DefaultPage>
        Страница Сообщений - Первая
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
export default class Message1 extends Vue {}
</script>