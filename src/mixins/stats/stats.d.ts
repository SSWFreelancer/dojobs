declare module "@/mixins/stats/stats.js" {
    const statsData: {
      data: () => {
        stats: Array<{
          id: number;
          count: number;
          name: string;
          percent: number;
          icon: string;
          color: string;
        }>;
      };
    };
  
    export default statsData;
  }
  