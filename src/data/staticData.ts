import { ChartData, TableData } from '@/type';

export const lineChartData: ChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: 'Profit',
      data: [30, 45, 60, 50, 40, 55, 35],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

export const barChartData: ChartData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F'],
  datasets: [
    {
      label: 'Number of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    {
      label: 'Number of Views',
      data: [20, 30, 15, 25, 18, 22],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

export const tableData: TableData[] = [
  { name: 'John Doe', age: 28, role: 'Developer' },
  { name: 'Jane Smith', age: 34, role: 'Designer' },
  { name: 'Sam Green', age: 45, role: 'Manager' },
  { name: 'Alex Brown', age: 32, role: 'Marketing' },
  { name: 'Emily White', age: 27, role: 'Sales' },
  { name: 'Michael Johnson', age: 40, role: 'Product Manager' },
  { name: 'Linda Martinez', age: 29, role: 'UX Researcher' },
  { name: 'David Wilson', age: 36, role: 'Data Analyst' },
  { name: 'Sophia Lee', age: 31, role: 'Content Strategist' },
  { name: 'James Harris', age: 42, role: 'HR Specialist' },
  { name: 'Olivia Clark', age: 25, role: 'Intern' },
  { name: 'William Lewis', age: 38, role: 'Accountant' },
  { name: 'Mia Walker', age: 30, role: 'Project Coordinator' },
  { name: 'Ethan Allen', age: 33, role: 'SEO Specialist' },
  { name: 'Charlotte Scott', age: 26, role: 'Social Media Manager' },
  { name: 'Daniel Young', age: 37, role: 'Software Engineer' },
  { name: 'Amelia King', age: 32, role: 'PR Manager' },
  { name: 'Benjamin Adams', age: 39, role: 'Sales Director' },
  { name: 'Isabella Carter', age: 28, role: 'Graphic Designer' },
  { name: 'Lucas Nelson', age: 41, role: 'IT Support' },
  { name: 'Ava Turner', age: 29, role: 'Business Analyst' },
  { name: 'Henry Roberts', age: 35, role: 'Operations Manager' },
];