// import React, { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // import default styles
// import "react-date-range/dist/theme/default.css"; // import theme styles

// const DateRangePicker = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: "selection",
//     },
//   ]);

//   console.log(state);

//   return (
//     <DateRange
//       editableDateInputs={true}
//       onChange={(item) => setState([item.selection])}
//       moveRangeOnFirstSelection={false}
//       ranges={state}
//     />
//   );
// };

// export default DateRangePicker;
import React from "react";
import { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const MyDateRangePicker = () => {
  const [startDate, setStartDate] = useState(moment("2024-01-01"));
  const [endDate, setEndDate] = useState(moment("2024-01-15"));

  const handleApply = (event, picker) => {
    setStartDate(picker.startDate);
    setEndDate(picker.endDate);
    console.log(
      "A new date selection was made: " +
        picker.startDate.format("YYYY-MM-DD") +
        " to " +
        picker.endDate.format("YYYY-MM-DD")
    );
  };

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      opens="left"
      onApply={handleApply}
    >
      <input
        type="text"
        value={
          startDate.format("MM/DD/YYYY") + " - " + endDate.format("MM/DD/YYYY")
        }
        readOnly
      />
    </DateRangePicker>
  );
};

export default MyDateRangePicker;
