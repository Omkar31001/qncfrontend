function Completion({ kpi, color }) {
  return (
    <div className="flex justify-items-center justify-evenly hover:shadow-lg hover:bg-brandWhite-back cursor-pointer">
      <h3>KPI {kpi}</h3>
      <span className={` rounded-full h-2 w-2 ${color} mt-2`}></span>
    </div>
  );
}

export default Completion;
