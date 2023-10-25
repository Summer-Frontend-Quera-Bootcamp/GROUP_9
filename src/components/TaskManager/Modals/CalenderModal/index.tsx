import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar, DateRangeInput } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateRangeInput } from "@fullcalendar/interaction";
import "../../CalenderView/index.css";
import "./index.css";
import { CalenderStartTimeIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Create/CalenderModal/StartTime";
import { CalenderEndTimeIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Create/CalenderModal/EndTime";
interface CalenderProps {}

const CalenderModal: React.FC<CalenderProps> = () => {
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
    <>
      <div className="m-auto p-[20px] w-[936px] h-[632px] mt-[51px] shadow-calendar rounded-[20px]">
        <div className="flex justify-start items-center gap-[18.75rem] mb-[30px] ">
          <span className="flex items-center justify-center gap-xs">
            {CalenderStartTimeIcon}
            <h2 className="font-IranYekan500 text-Black text-HeadingS">
              زمان شروع:{startDay}
            </h2>
          </span>
          <span className="flex items-center justify-center gap-xs">
            {CalenderEndTimeIcon}
            <h2 className="font-IranYekan500 text-Black text-HeadingS">
              زمان پایان:{endDay}
            </h2>
          </span>
        </div>
        <div className="  w-full flex border-top-calendar">
          <div className="w-[247px] h-[545px] bg-[#F7F8F9] flex flex-col gap-[24px] px-m justify-center">
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                امروز
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                یکشنبه
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                کمی بعد
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                ۱۷:۳۹
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                فردا
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                دوشنبه
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                این آخر هفته
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                جمعه
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                هفته‌ی آینده
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                شنبه
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                آخرهفته‌ی آینده
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                ۴ آبان
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                دو هفته دیگر
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                ۱۱ آبان
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-IranYekan500 text-HeadingXS text-Black">
                ۴ هفته دیگر
              </h3>
              <p className="text-Gray-Primary font-IranYekan500 text-BodyM">
                ۱ آذر
              </p>
            </div>
          </div>
          <div className="w-[689px]">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              locale={Persian}
              fixedWeekCount={false}
              contentHeight={"300px"}
              firstDay={6}
              selectable={true}
              selectAllow={(info) => {
                return info.start < info.end;
              }}
              select={handleDateRangeSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderModal;
