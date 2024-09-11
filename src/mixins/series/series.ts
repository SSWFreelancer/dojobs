import { Component, Vue } from "vue-property-decorator";
import { ISeries } from "@/mixins/series/series.d";

@Component
export default class Series extends Vue{
    series: ISeries[] = [
        {
            id: 1,
            series: "Series-1",
            point: 21,
            percent1: 1.21,
            percent2: 6.22,
        },
        {
            id: 2,
            series: "Series-2",
            point: 34,
            percent1: 2.34,
            percent2: 5.71,
        },        
        {
            id: 3,
            series: "Series-3",
            point: 45,
            percent1: 1.47,
            percent2: 4.35,
        }, 
        {
            id: 4,
            series: "Series-4",
            point: 66,
            percent1: 2.17,
            percent2: 7.11,
        },        
        {
            id: 5,
            series: "Series-5",
            point: 72,
            percent1: 3.66,
            percent2: 4.25,
        },                                                         
    ]
}