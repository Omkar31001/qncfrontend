import Completion from "./Completion";
import { Route, Link, Switch } from "react-router-dom";

function handleClick() {}

function KpiComp() {
  return (
    <div>
      <div className=" container bg-brandWhite-default w-full h-96 rounded-lg pb-2 overflow-y-scroll main-scroll p-4 filter drop-shadow-lg">
        <h3 className="font-sans font-semibold text-center ">KPI</h3>
        <div className=" font-sans  m-4 grid grid-cols-2 gap-4 ">
          <Completion kpi="1" color="bg-green-500" />
          <Completion kpi="2" color="bg-red-500" />
          <Completion kpi="3" color="bg-yellow-500" />
          <Completion kpi="4" color="bg-green-500" />
          <Completion kpi="5" color="bg-red-500" />
          <Completion kpi="6" color="bg-yellow-500" />
          <Completion kpi="7" color="bg-green-500" />
          <Completion kpi="8" color="bg-red-500" />
          <Completion kpi="9" color="bg-yellow-500" />
          <Completion kpi="10" color="bg-yellow-500" />
          <Completion kpi="1" color="bg-green-500" />
          <Completion kpi="2" color="bg-red-500" />
          <Completion kpi="3" color="bg-yellow-500" />
          <Completion kpi="4" color="bg-green-500" />
          <Completion kpi="5" color="bg-red-500" />
          <Completion kpi="6" color="bg-yellow-500" />
          <Completion kpi="7" color="bg-green-500" />
          <Completion kpi="8" color="bg-red-500" />
          <Completion kpi="9" color="bg-yellow-500" />
          <Completion kpi="10" color="bg-yellow-500" />
        </div>
      </div>
    </div>
  );
}

export default KpiComp;
