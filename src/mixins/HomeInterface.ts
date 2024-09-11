import { Component, Mixins } from "vue-property-decorator";

import Graphs from "@/mixins/graph/graph";
import Series from "@/mixins/series/series";
import Stats from "@/mixins/stats/stats";
import Distance from "@/mixins/distance/distance";

@Component
export default class Home extends Mixins(
    Graphs,
    Series,
    Stats,
    Distance
) {

}


