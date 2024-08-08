import { lineChartData, barChartData, tableData } from '../data/staticData';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import DataTable from '@/components/DataTable';

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl text-black text-center font-bold mb-4">Interactive Dashboard</h1>
      <div className="flex flex-col gap-8">
        <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 xs:h-[20rem] sm:h-[25rem] md:h-[35rem] mx-auto">
          <h2 className="text-xl text-black font-semibold mb-4 text-center">Line Chart</h2>
          <div className='h-[90%]'>
            <LineChart data={lineChartData} />
          </div>
        </div>
        <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 xs:h-[25rem] sm:h-[25rem] md:h-[35rem] mx-auto">
          <h2 className="text-xl text-black font-semibold mb-4 text-center">Bar Chart</h2>
          <div className='h-[90%]'>
            <BarChart data={barChartData} />
          </div>
        </div>
        <div className="bg-white p-4 shadow-xl rounded-lg w-4/5 mx-auto">
          <DataTable data={tableData}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;