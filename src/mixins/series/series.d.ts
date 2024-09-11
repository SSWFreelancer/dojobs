declare module "@/mixins/series/series.js" {
    const seriesData: {
      data: () => {
        series: Array<{
          id: number;
          series: string;
          point: number;
          percent1: number;
          percent2: number;
        }>;
      };
    };
  
    export default seriesData;
  }
  