// types.ts
export interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      backgroundColor: string | string[];
      borderColor: string | string[];
    }[];
  }
  
  export interface TableData {
    name: string;
    age: number;
    role: string;
  }
  