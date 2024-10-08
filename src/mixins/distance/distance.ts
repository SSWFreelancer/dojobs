import { Component, Vue } from "vue-property-decorator";

import {IDistance} from "@/mixins/distance/distance.d";

@Component
export default class Distance extends Vue {
    distance: IDistance[] = [
        {
            id: 1,
            count: 1650,
            percent: 80,
            color: "purple",
        },
        {
            id: 2,
            count: 1239,
            percent: 70,
            color: "green",
        },    
        {
            id: 3,
            count: 850,
            percent: 66,
            color: "yellow",
        },       
        {
            id: 4,
            count: 1129,
            percent: 50,
            color: "blue",
        },                                             
    ]    
}


