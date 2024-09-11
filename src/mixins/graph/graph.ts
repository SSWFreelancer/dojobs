import { Component, Vue } from "vue-property-decorator";

import { IGraph } from "@/mixins/graph/graph.d";

@Component
export default class Graph extends Vue {
    graph: IGraph[] = [
        {
            id: 1,
            content: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium deserunt ducimus magni voluptate deleniti eligendi beatae alias harum? Expedita sed rem amet illum pariatur, ratione nihil hic aliquid reprehenderit!",
                    "Accusamus laudantium deserunt ducimus magni voluptate deleniti eligendi beatae alias harum? Expedita sed rem amet illum pariatur",
            ]
        }, 
        {
            id: 2,
            content: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsYVJLf86IJTsmRkTOK-TtWbBMrxd-xierw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuH5rc3mnhwUYTII11cJX5fpYfGAjBKrnhUA&s",
            ]
        },                                                        
    ]
}