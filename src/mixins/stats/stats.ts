import { Vue, Component } from "vue-property-decorator";   

import { IStats } from "@/mixins/stats/stats.d";

@Component
export default class Stats extends Vue{
    stats: IStats[] = [
        {
            id: 1,
            count: 2559,
            name: "Job Applicant",
            percent: 42,
            icon: "fa-solid fa-briefcase",
            color: "purple",
        },
        {
            id: 2,
            count: 217,
            name: "Conform Employee",
            percent: 28,
            icon: "fa-solid fa-check-to-slot",
            color: "green",
        },    
        {
            id: 3,
            count: 72,
            name: "Job Pending",
            percent: 16,
            icon: "fa-solid fa-hourglass-end",
            color: "yellow",
        },                              
    ]
}