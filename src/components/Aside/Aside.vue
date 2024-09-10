<template>
    <div class="aside" :class="asidehide ? 'hide' : ''">
      <router-link to="/" class="aside__logo"> Do&shy;Jobs</router-link>
      <User />
      <nav class="aside__nav" :class="burger ? 'open' : ''">
        <router-link to="/">
            <i class="fa-solid fa-table-columns"></i>
            <span>Dashboard</span>
        </router-link>
        <div class="aside__item" :class="item1 ? 'open' : ''">
            <p @click="item1Toggle">
                <span>
                    <i class="fa-solid fa-message"></i> 
                    <b>Message</b>
                </span>
                <i class="fa-solid fa-chevron-down"></i>
            </p>
            <ul>
                <li>
                    <router-link to="/message1">
                        <i class="fa-solid fa-list"></i>
                        <span>Пункт 1</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/message2">
                        <i class="fa-solid fa-ruler"></i>
                        <span>Пункт 2</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-link to="/settings">
            <i class="fa-solid fa-sliders"></i>
            <span> Settings </span>
        </router-link>
        <router-link to="/user">
            <i class="fa-solid fa-user"></i>
            <span>User</span>
        </router-link>
        <div class="aside__bottom">
            <div class="aside__descr">
                <p>
                    Color Scheme
                </p>
                <div class="aside__info" :class="info ? 'open' : ''">
                    <i class="fa-solid fa-circle-info" @click="infoToggle"></i>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Minima laudantium facilis.
                    </p>
                </div>
            </div>
            <div class="aside__scheme" :class="isDarkMode ? 'dark' : ''">
                <button @click="lightMode">
                    <i class="fa-solid fa-sun"></i>
                    <span>
                        Light
                    </span>
                </button>
                <button @click="darkMode">
                    <i class="fa-solid fa-moon"></i>
                    <span>
                        Dark
                    </span>
                </button>
            </div>
        </div>


      </nav>
      <div @click="asideToggle" class="aside__toggle">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="aside__burger" @click="burgerToggle">
        <div class="aside__burger-wrapper" :class="burger ? 'active' : ''">
            <span></span>
        </div>
      </div>
    </div>
  </template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import User from "./User.vue";
@Component({
    components:{
        User,
    },
    methods: {
        ...mapActions(["darkMode"]),
        ...mapActions(["lightMode"]),
    },
    computed: {
        ...mapGetters(["isDarkMode"]),
    },
  
})
export default class Aside extends Vue {
    asidehide: boolean = false;
    burger: boolean = false;
    item1: boolean = false;
    info: boolean = false;
    burgerToggle() {
        this.burger = !this.burger;
    }
    asideToggle() {
        this.asidehide = !this.asidehide;
    }
    item1Toggle() {
        this.item1 = !this.item1;
    }
    infoToggle(){
        this.info = !this.info;
    }
    @Watch('$route')
        onRouteChange() {
            this.burger = false;
        }
    }
</script>
  
  <style lang="sass" scoped>
  @import "@/assets/style/aside/aside.sass"
  </style>
  