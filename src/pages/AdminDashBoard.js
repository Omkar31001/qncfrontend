import KpiComp from "../components/KpiComp";
import Desc from "./Desc";

function AdminDashBoard() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-2xl pt-8 ml-20">Admin DashBoard</h1>
      </div>
      <div className=" grid grid-cols-2 mt-24 gap-5 mx-11">
        <Desc heading="KPI" desc="xyz" />
        <Desc heading="Department" desc="IT" />
        <div className="col-span-1  bg-white h-960 rounded-xl item-stretch filter drop-shadow-lg  overflow-y-scroll overflow-x-scroll">
          <h2 className="font-medium text-center">Data</h2>
        </div>
        <KpiComp />
      </div>
    </div>
  );
}

export default AdminDashBoard;
