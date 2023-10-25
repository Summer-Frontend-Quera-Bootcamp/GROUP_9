// import React, { useState } from "react";
// import moment, { Moment } from "moment-jalaali";
// import Calendar from "react-calendar";

// interface ICalendarViewProps extends React.PropsWithChildren {}

// const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
//   const [selectedDay, setSelectedDay] = useState<Moment>(moment());

//   const handleSelect = (date: any) => {
//     if (date instanceof Date) {
//       setSelectedDay(moment(date));
//     }
//   };

//   const formattedDate = moment(selectedDay).format("jYYYY/jM/jD");

//   const tileContent = ({ date }: { date: Date; view: string }) => {
//     const dayName = moment(date).format("dddd");
//     return (
//       <div>
//         <p>{dayName}</p>
//       </div>
//     );
//   };

//   const tileClassName = () => {
//     return "border border-black-300 p-2";
//   };

//   return (
//     <div>
//       <h1>Persian Calendar</h1>
//       <p>Selected Date: {formattedDate}</p>
//       <Calendar
//         value={selectedDay.toDate()}
//         onChange={handleSelect}
//         locale="fa-IR"
//         className=""
//         tileContent={tileContent}
//         tileClassName={tileClassName}
//       />
//     </div>
//   );
// };

// export default CalenderView;
// // import React, { useState } from "react";
// // import moment, { Moment } from "moment-jalaali";
// // import Calendar from "react-calendar";

// // interface ICalendarViewProps extends React.PropsWithChildren {}

// // const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
// //   const [selectedDay, setSelectedDay] = useState<Moment>(moment());

// //   const handleSelect = (date: any) => {
// //     if (date instanceof Date) {
// //       setSelectedDay(moment(date));
// //     }
// //   };

// //   const formattedDate = moment(selectedDay).format("jYYYY/jM/jD");

// //   const tileContent = ({ date }: { date: Date; view: string }) => {
// //     const dayName = moment(date).format("dddd");
// //     return (
// //       <div>
// //         <p>{dayName}</p>
// //       </div>
// //     );
// //   };

// //   const tileClassName = () => {
// //     return "border border-black-300 p-2";
// //   };

// //   return (
// //     <div>
// //       <h1>Persian Calendar</h1>
// //       <p>Selected Date: {formattedDate}</p>
// //       <Calendar
// //         locale="fa-IR@calendar-first-day-of-week=0"
// //         value={selectedDay.toDate()}
// //         onChange={handleSelect}
// //         className=""
// //         tileContent={tileContent}
// //         tileClassName={tileClassName}
// //       />
// //     </div>
// //   );
// // };
// // export default CalenderView;
// // import React, { useState } from 'react';
// // import type { JalaaliDate } from 'jalali-moment';
// // import JalaaliDate from 'jalali-moment';

// // const PersianCalendar: React.FC = () => {
// //   const [currentDate, setCurrentDate] = useState<JalaaliDate>(new JalaaliDate());

// //   const generateCalendarGrid = (date: JalaaliDate): JSX.Element => {
// //     const days = [];
// //     for (let i = 0; i < 31; i++) {
// //       days.push(new JalaaliDate(date.getFullYear(), date.getMonth(), i + 1));
// //     }

// //     return (
// //       <table className="table-auto">
// //         <thead>
// //           <tr>
// //             <th>شنبه</th>
// //             <th>یکشنبه</th>
// //             <th>دوشنبه</th>
// //             <th>سه شنبه</th>
// //             <th>چهارشنبه</th>
// //             <th>پنج شنبه</th>
// //             <th>جمعه</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {days.map((row) => (
// //             <tr key={row[0]}>
// //               {row.map((day) => (
// //                 <td
// //                   key={day}
// //                   className={classNames(
// //                     'border border-gray-300',
// //                     'px-4 py-2',
// //                     day % 2 === 0 ? 'bg-white' : 'bg-gray-100',
// //                     day === currentDate.getDate() ? 'bg-blue-500 text-white' : ''
// //                   )}
// //                 >
// //                   {day}
// //                 </td>
// //               ))}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     );
// //   };

// //   return (
// //     <div className="container">
// //       <h1 className="text-blue-900 font-bold">Persian Calendar</h1>
// //       {generateCalendarGrid(currentDate)}
// //     </div>
// //   );
// // };

// // export default PersianCalendar;

// // import Calendar from "react-calendar";
// // import "./index.css";

// // type Value = Date | Date[] | null;

// // type CalendarViewProps = {
// //   selectedDate: Date;
// //   onDateChange: (
// //     date: Date,
// //     event: MouseEvent<HTMLButtonElement, MouseEvent>
// //   ) => void;
// // };

// // const CalendarView: React.FC<CalendarViewProps> = ({
// //   selectedDate,
// //   onDateChange,
// // }) => {
// //   // Convert the selected date to the Persian calendar
// //   const persianDate = new Date(selectedDate.getTime() + 218790400000);

// //   return (
// //     <Calendar
// //       className="react-calendar"
// //       locale="fa"
// //       selected={persianDate}
// //       onChange={(
// //         value: Value,
// //         event: MouseEvent<HTMLButtonElement, MouseEvent>
// //       ) => {
// //         if (value !== null) {
// //           // Cast the `Value` argument to a `Date` object
// //           const date = value as Date;

// //           // Call the `onDateChange` function
// //           onDateChange(date, event);
// //         }
// //       }}
// //     />
// //   );
// // };

// // export default CalendarView;
// import React, { useState } from "react";
// import Calendar, { CalendarProps } from "react-calendar";
// import moment, { Moment } from "moment-jalaali";

// interface ICalendarViewProps extends React.PropsWithChildren {}

// interface CalendarPropsWithFirstDayOfWeek extends CalendarProps {
//   firstDayOfWeek: number;
// }

// const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
//   const [selectedDay, setSelectedDay] = useState<Moment>(moment());

//   const handleSelect = (date: any) => {
//     if (date instanceof Date) {
//       setSelectedDay(moment(date));
//     }
//   };

//   const tileContent = ({ date }: { date: Date; view: string }) => {
//     const dayName = moment(date).format("dddd");
//     const persianDate = moment(date).format("jYYYY/jM/jD");
//     return (
//       <div className="tile-content">
//         <p className="day-name">{dayName}</p>
//         <p className="date">{persianDate}</p>
//       </div>
//     );
//   };

//   const tileClassName = () => {
//     return "tile-content";
//   };

//   return (
//     <div>
//       <h1>Persian Calendar</h1>
//       <Calendar
//         firstDayOfWeek={2}
//         value={selectedDay.toDate()}
//         onChange={handleSelect}
//         locale="fa-AF"
//         className=""
//         tileContent={tileContent}
//         tileClassName={tileClassName}
//       />
//     </div>
//   );
// };

// export default CalenderView;
// import React, { useState } from "react";
// import BigCalendar from "react-big-calendar";
// import moment, { Moment } from "moment-jalaali";

// interface ICalendarViewProps extends React.PropsWithChildren {}

// const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
//   const [selectedDay, setSelectedDay] = useState<Moment>(moment());

//   const handleSelect = (date: any) => {
//     if (date instanceof Date) {
//       setSelectedDay(moment(date));
//     }
//   };

//   const tileContent = ({ date }: { date: Date; view: string }) => {
//     const dayName = moment(date).format("dddd");
//     const persianDate = moment(date).format("jYYYY/jM/jD");
//     return (
//       <div className="tile-content">
//         <p className="day-name">{dayName}</p>
//         <p className="date">{persianDate}</p>
//       </div>
//     );
//   };

//   const tileClassName = () => {
//     return "tile-content";
//   };

//   return (
//     <div>
//       <h1>Persian Calendar</h1>
//       <BigCalendar
//         locale="fa-IR"
//         startOfWeek="Saturday"
//         value={selectedDay.toDate()}
//         onChange={handleSelect}
//         tileContent={tileContent}
//         tileClassName={tileClassName}
//       />
//     </div>
//   );
// };

// export default CalenderView;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import moment, { Moment } from "moment-jalaali";

// interface ICalendarViewProps extends React.PropsWithChildren {}

// const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
//   const [selectedDay, setSelectedDay] = useState<Moment>(moment());

//   const handleSelect = (date: any) => {
//     if (date instanceof Date) {
//       setSelectedDay(moment(date));
//     }
//   };

//   const tileContent = ({ date }: { date: Date; view: string }) => {
//     const dayName = moment(date).format("dddd");
//     const persianDate = moment(date).format("jYYYY/jM/jD");
//     return (
//       <div className="tile-content">
//         <p className="day-name">{dayName}</p>
//         <p className="date">{persianDate}</p>
//       </div>
//     );
//   };

//   const tileClassName = () => {
//     return "tile-content";
//   };

//   const selectedDayString: string = selectedDay.toString();

//   return (
//     <div>
//       <h1>Persian Calendar</h1>
//       <DatePicker
//         locale="fa-IR"
//         value={selectedDayString}
//         dateFormat="jYYYY/jM/jD"
//         onChange={handleSelect}
//       />

//       <p>Selected date: {selectedDayString}</p>
//     </div>
//   );
// };

// export default CalenderView;
//
// import React, { useState } from "react";
// import moment, { Moment } from "moment-jalaali";
// import Calendar from "react-modern-calendar-datepicker";

// interface ICalendarViewProps extends React.PropsWithChildren {}

// const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
//   const [selectedDay, setSelectedDay] = useState<Moment>(
//     moment().locale("fa-IR")
//   );

//   const handleSelect = (date: any) => {
//     if (date instanceof Date) {
//       setSelectedDay(moment(date).locale("fa-IR"));
//     }
//   };

//   const formattedDate = selectedDay.format("jYYYY/jM/jD");

//   const tileContent = ({ date }: { date: Date; view: string }) => {
//     const dayName = moment(date).locale("fa-IR").format("dddd");
//     return (
//       <div>
//         <p>{dayName}</p>
//       </div>
//     );
//   };

//   const tileClassName = () => {
//     return "border border-black-300 p-2";
//   };

//   return (
//     <div>
//       <h1>Persian Calendar</h1>
//       <p>Selected Date: {formattedDate}</p>
//       <Calendar
//         value={selectedDay.toDate() as any}
//         onChange={handleSelect}
//         locale="fa-IR"
//       />
//     </div>
//   );
// };

// export default CalenderView;
// import React, { useState } from "react";
// import moment, { Moment } from "moment";
// import Calendar from "react-calendar";

// interface ICalendarViewProps extends React.PropsWithChildren {}

// const CalenderView: React.FC<ICalendarViewProps> = ({}): JSX.Element => {
//   const [selectedDay, setSelectedDay] = useState<Moment>(moment());

//   const handleSelect = (date: any) => {
//     if (date instanceof Date) {
//       setSelectedDay(moment(date));
//     }
//   };

//   const formattedDate = moment(selectedDay).format("YYYY/MM/DD");

//   const tileContent = ({ date }: { date: Date; view: string }) => {
//     const dayName = moment(date).format("dddd");
//     return (
//       <div>
//         <p>{dayName}</p>
//       </div>
//     );
//   };

//   const tileClassName = () => {
//     return "border border-black-300 p-2";
//   };

//   return (
//     <div>
//       <h1>Solar Calendar</h1>
//       <p>Selected Date: {formattedDate}</p>
//       <Calendar
//       formatDay={}
//         value={selectedDay.toDate()}
//         onChange={handleSelect}
//         className=""
//         tileContent={tileContent}
//         tileClassName={tileClassName}
//       />
//     </div>
//   );
// };

// export default CalenderView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// // import "./index.css";
// interface CalendarViewProps {}

// const CalendarView: React.FC<CalendarViewProps> = () => {
//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin]}
//       initialView="dayGridMonth"
//       locale={Persian}
//       headerToolbar={{
//         right: "title,prev,next today ",
//       }}
//       // headerToolbarOptions={{
//       //   titleAlign: "center",
//       //   titleMarginRight: 20,
//       //   buttonMarginRight: 20,
//       // }}
//     />
//   );
// };

// export default CalendarView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "./index.css";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {
//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin]}
//       initialView="dayGridMonth"
//       locale={Persian}
//       fixedWeekCount={false}
//       contentHeight={"600px"}
//     />
//   );
// };

// export default CalenderView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "./index.css";
// import jalaliMoment from "jalali-moment";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {
//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin]}
//       initialView="dayGridMonth"
//       locale={Persian}
//       fixedWeekCount={false}
//       contentHeight={"500px"}
//       firstDay={6}
//       dayCellContent={(arg) => {
//         console.log(arg);
//         const persianDate = jalaliMoment(arg.date);
//         if (persianDate.jDate() === 1) {
//           console.log(
//             "First day of the month:",
//             persianDate.format("jYYYY/jM/jD")
//           );
//         }
//         return (
//           <div>
//             <div>{arg.dayNumberText}</div>
//           </div>
//         );
//       }}
//     />
//   );
// };

// export default CalenderView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "./index.css";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {
//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin]}
//       initialView="dayGridMonth"
//       locale={Persian}
//       fixedWeekCount={false}
//       contentHeight={"500px"}
//       dayCellContent={(arg) => {
//         const dayOfWeek = arg.date.getDay();

//         if (dayOfWeek === 6) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">شنبه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         } else if (dayOfWeek === 0) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">یکشنبه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         } else if (dayOfWeek === 1) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">دوشنبه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         } else if (dayOfWeek === 2) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">سه شنبه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         } else if (dayOfWeek === 3) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">چهارشنبه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         } else if (dayOfWeek === 4) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">پنج شنبه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         } else if (dayOfWeek === 5) {
//           return (
//             <div className="relative">
//               <div className="absolute left-[105px] bottom-[55px]">
//                 <h2 className="font-IranYekan500 text-base">جمعه</h2>
//               </div>

//               <div className="absolute left-[2px] bottom-[-10px]">
//                 {arg.dayNumberText}
//               </div>
//             </div>
//           );
//         }
//       }}
//     />
//   );
// };

// export default CalenderView;

// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "./index.css";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {
//   const dayCellContent = () => {
//     const dayName = new Date().getDay();
//     const dayNumber = new Date().getDate();
//     return (
//       <div>
//         <span>{dayName}</span>
//         <span>{dayNumber}</span>
//       </div>
//     );
//   };

//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin]}
//       initialView="dayGridMonth"
//       locale={Persian}
//       fixedWeekCount={false}
//       contentHeight={"500px"}
//       dayCellContent={dayCellContent}
//     />
//   );
// };

// export default CalenderView;

// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "./index.css";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {
//   const customRenderDayCell = (date: Date, cellContent: HTMLElement): void => {
//     const dayName = date.toLocaleDateString("fa-IR", {
//       weekday: "long",
//     });
//     cellContent.textContent += ` ${dayName}`;
//   };

//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin]}
//       initialView="dayGridMonth"
//       locale={Persian}
//       fixedWeekCount={false}
//       contentHeight={"600px"}
//       dayCellContent={customRenderDayCell}
//     />
//   );
// };

// export default CalenderView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "./index.css";
// import moment from "moment-jalaali";

// interface CalenderViewProps {}

// const CalenderView: React.FC<CalenderViewProps> = () => {

//   return (
//     <div className="w-3/4 ml-m float-left mt-[100px]">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin]}
//         initialView="dayGridMonth"

//         fixedWeekCount={false}
//         contentHeight={"500px"}
//         firstDay={6}

//       />
//     </div>
//   );
// };

// export default CalenderView;

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Persian from "@fullcalendar/core/locales/fa";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./index.css";

interface CalenderViewProps {}

const CalenderView: React.FC<CalenderViewProps> = () => {
  return (
    <div className="w-3/4 ml-m float-left mt-[100px] overflow-visible">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locale={Persian}
        fixedWeekCount={false}
        contentHeight={"700px"}
        firstDay={6}
      />
    </div>
  );
};

export default CalenderView;
