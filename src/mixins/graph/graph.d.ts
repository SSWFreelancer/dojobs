declare module "@/mixins/graph/graph.js" {
    const graphData: {
      data: () => {
        graph: Array<{
          id: number;
          content: [
            {
              text1: string;
              text2: string;
              image1: string;
              image2: string;
            }
          ]
        }>;
      };
    };
  
    export default graphData;
  }
  