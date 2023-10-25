// // // import React from "react";
// // // import FullCalendar from '@fullcalendar/react';
// // // import dayGridPlugin from "@fullcalendar/daygrid";
// // // import Persian from "@fullcalendar/core/locales/fa";
// // // import timeGridPlugin from "@fullcalendar/timegrid";
// // // import "./index.css";

// // // interface CalenderViewProps {}

// // // const CalenderView: React.FC<CalenderViewProps> = () => {
// // //   const handleDateClick = (arg) => {
// // //     const selectedDate = arg.date;
// // //     console.log(selectedDate); // You can do further processing with the selected date here
// // //   };
// // //   return (
// // //     <div className="w-3/4 ml-m float-left pl-[27px] mt-[100px] overflow-y-scroll overflow-x-hidden">
// // //       <FullCalendar
// // //         plugins={[dayGridPlugin, timeGridPlugin]}
// // //         initialView="dayGridMonth"
// // //         locale={Persian}
// // //         fixedWeekCount={false}
// // //         contentHeight={"700px"}
// // //         firstDay={6}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default CalenderView;
// // import React from "react";
// // import FullCalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";
// // import Persian from "@fullcalendar/core/locales/fa";
// // import timeGridPlugin from "@fullcalendar/timegrid";
// // import interactionPlugin, { DateRangeInput } from "@fullcalendar/interaction";
// // import "./index.css";

// // interface CalenderViewProps {}

// // const CalenderView: React.FC<CalenderViewProps> = () => {
// //   const handleDateRangeSelect = (dateInfo: DateRangeInput) => {
// //     const selectedStartDate = dateInfo.startStr;
// //     const selectedEndDate = dateInfo.endStr;
// //     console.log("Selected start date:", selectedStartDate);
// //     console.log("Selected end date:", selectedEndDate);

// //     // You can do further processing with the selected date range here
// //   };

// //   return (
// //     <div className="w-3/4 ml-m float-left pl-[27px] mt-[100px] overflow-y-scroll overflow-x-hidden">
// //       <FullCalendar
// //         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
// //         initialView="dayGridMonth"
// //         locale={Persian}
// //         fixedWeekCount={false}
// //         contentHeight={"700px"}
// //         firstDay={6}
// //         selectable={true}
// //         selectAllow={(info) => {
// //           // Allow selection only if it's a valid date range
// //           return info.start < info.end;
// //         }}
// //         select={handleDateRangeSelect}
// //       />
// //     </div>
// //   );
// // };

// // export default CalenderView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin, { DateRangeInput } from "@fullcalendar/interaction";
// import "./index.css";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {
//   const handleDateRangeSelect = (dateInfo: DateRangeInput) => {
//     const selectedStartDate = new Date(dateInfo.startStr);
//     const selectedEndDate = new Date(dateInfo.endStr);
//     const startDay = selectedStartDate.toLocaleString("fa", {
//       day: "numeric",
//       month: "long",
//     });
//     const endDay = selectedEndDate.toLocaleString("fa", {
//       day: "numeric",
//       month: "long",
//     });

//     console.log("Selected start date:", startDay);
//     console.log("Selected end date:", endDay);

//     // You can do further processing with the selected date range here
//   };

//   return (
//     <div className="w-3/4 ml-m float-left pl-[27px] mt-[100px] overflow-y-scroll overflow-x-hidden">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         locale={Persian}
//         fixedWeekCount={false}
//         contentHeight={"700px"}
//         firstDay={6}
//         selectable={true}
//         selectAllow={(info) => {
//           // Allow selection only if it's a valid date range
//           return info.start < info.end;
//         }}
//         select={handleDateRangeSelect}
//       />
//       <div>
//         <p>زمان شروع: {startDay}</p>
//         <p>زمان پایان: {endDay}</p>
//       </div>
//     </div>
//   );
// };

// export default CalenderView;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Persian from "@fullcalendar/core/locales/fa";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateRangeInput } from "@fullcalendar/interaction";
import "./index.css";

interface CalenderViewProps {}

const CalenderView: React.FC<CalenderViewProps> = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const handleDateRangeSelect = (dateInfo: DateRangeInput) => {
    const startDate = new Date(dateInfo.startStr);
    const endDate = new Date(dateInfo.endStr);

    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  let startDay = selectedStartDate?.toLocaleString("fa", {
    day: "numeric",
    month: "long",
  });
  let endDay = selectedEndDate?.toLocaleString("fa", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="w-3/4 ml-m float-left pl-[27px] mt-[100px] overflow-y-scroll overflow-x-hidden">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={Persian}
        fixedWeekCount={false}
        contentHeight={"700px"}
        firstDay={6}
        selectable={true}
        selectAllow={(info) => {
          return info.start < info.end;
        }}
        select={handleDateRangeSelect}
      />
      <div>
        {selectedStartDate && selectedEndDate && (
          <>
            <p>زمان شروع: {startDay}</p>
            <p>زمان پایان: {endDay}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CalenderView;
