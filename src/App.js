import "./App.css";
import AreaChart11 from "./components/AreaChart11";
import BarChartComponent from "./components/Barchart";
import MyDateRangePicker from "./components/DateRange";

import DateRangePicker from "./components/DateRange";

import LineChartComponent from "./components/Linechart";
import Paichart from "./components/Piechart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h2>Chart</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        {/* <AreaChart11 />
        <BarChartComponent />
        <LineChartComponent />
        <Paichart /> */}

        <div>
          {/* <DateRangePicker /> */}
          <MyDateRangePicker />
        </div>
      </div>
    </div>
  );
}

export default App;
