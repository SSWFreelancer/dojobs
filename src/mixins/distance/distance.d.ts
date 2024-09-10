declare module "@/mixins/distance/distance.js" {
    const distanceData: {
      data: () => {
        distance: Array<{
          id: number;
          count: number;
          percent: number;
          color: string;
        }>;
      };
    };
  
    export default distanceData;
  }
  