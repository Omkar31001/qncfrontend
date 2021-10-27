import Desc from "./Desc"
import Chart from "react-google-charts";
import KpiComp from "../components/KpiComp";
//
function DashBoard() {
  return (
    <div>
      <div>
      <h1 className ="font-semibold text-2xl pt-8 ml-20">Faculty Dashboard</h1>

      </div>
        <div className = " grid grid-cols-3 mt-24 gap-5 mx-6">
        <Desc heading = "Name" desc = "xyz"/>
        <Desc heading = "Program" desc = "Btech"/>
        <Desc heading = "Department" desc = "IT"/>
                <div className = "col-span-2  bg-white h-960 rounded-xl item-stretch filter drop-shadow-lg">
                  <div className="inline-block w-1/2 text-center mt-5 font-semibold">
                  Total KPI's Completed
                  {/* <h1 className = "text-center font-semibold pt-6">Total KPI's Completed</h1> */}
                  <Chart
            width={'25rem'}
            height={'20rem'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['KPI progress', 'Percentage'],
              ['Save',75],
              ['Submit',15],
              ['Incomplete',10]

            ]}
            options={{
              colors: ['#7f7fd5','#b683da','#e786d7'],
              // title: "Total KPI's Completed",
              chartArea:{
                top:50,
                left:100,
                width:"90%",
                // height:"50%",
            },
              titleTextStyle: {
                fontSize: 15, 
                bold: true, 
          
              },
              legend : { position:"bottom"},
              is3D:false
            }}
            rootProps={{ 'data-testid': '1' }}
            />
            </div>
            <div className="inline-block w-1/2 text-center mt-5 font-semibold">
            Total KPI's verified
            {/* <h1 className = "text-center font-semibold mt-6 inline-block absolute">Total KPI's verified</h1> */}
            <Chart
            width={'25rem'}
            height={'20rem'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['KPI progress', 'Percentage'],
              ['Verified',75],
              ['Not-Verified',25]
            ]}
            options={{
              colors: ['#7f7fd5','#e786d7'],
              // title: "Total KPI's verified",
              chartArea:{
                top:50,
                left:100,
                width:"100%",
                // height:"50%"
            },
              titleTextStyle: {
                fontSize: 15, 
                bold: true,    
              },
              legend : { position:"bottom"},
              is3D:false,
              
            }}
            
            rootProps={{ 'data-testid': '1' }}
            />
            </div>
        </div>
        <KpiComp/>
        </div>
    </div>
  )
}

export default DashBoard
