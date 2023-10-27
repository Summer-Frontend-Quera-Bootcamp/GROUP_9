import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Persian from "@fullcalendar/core/locales/fa";
// import { Calendar, DateRangeInput } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateRangeInput } from "@fullcalendar/interaction";
import "./index.css";
import { CalenderStartTimeIcon } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/CalenderModal/StartTime";
import { CalenderEndTimeIcon } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/CalenderModal/EndTime";

interface CalenderProps {
  show?: boolean;
  func: (showModal: boolean) => void;
}

const CalenderModal: React.FC<CalenderProps> = ({
  show = false,
  func,
}: CalenderProps) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(true);

  const handleDateRangeSelect = (dateInfo: DateRangeInput) => {
    const startDate = new Date(dateInfo.startStr);
    const endDate = new Date(dateInfo.endStr);

    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const startDay = selectedStartDate?.toLocaleString("fa", {
    day: "numeric",
    month: "long",
  });
  const endDay = selectedEndDate?.toLocaleString("fa", {
    day: "numeric",
    month: "long",
  });

  const handleClick = () => {
    setShowModal(false);
    func(showModal)
  }

  return show ? (
    <div className="fixed w-screen h-screen flex justify-center items-center z-50">
      <div className="relative w-[936px] h-[632px] rounded-[20px] shadow-calender bg-White">
        <header className="w-[896px] mt-[51px] mx-[20px] flex justify-between items-center mx-auto">
          <span className="w-[438px] flex items-center justify-start gap-xs">
            {CalenderStartTimeIcon}
            <h4 className="font-IranYekan500 text-Black text-HeadingS">
              زمان شروع
            </h4>
            <h4 className="font-IranYekan500 text-Brand-Primary text-HeadingS">
              {startDay}
            </h4>
          </span>
          <span className="w-[438px] flex items-center justify-start gap-xs">
            {CalenderEndTimeIcon}
            <h4 className="font-IranYekan500 text-Black text-HeadingS">
              زمان پایان
            </h4>
            <h4 className="font-IranYekan500 text-Brand-Primary text-HeadingS">
              {endDay}
            </h4>
          </span>
        </header>

        <main className="w-full mt-[37px] flex border-t-2 border-[#E4E4E4]">
          <div className="w-[293px] h-[506px] py-[23px] px-m rounded-br-[20px] bg-[#F7F8F9] flex flex-col gap-m justify-start">
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
          <div className="w-[643px] pt-[94px] pl-[24px] calendar2">
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
        </main>
        <footer className="absolute bottom-[32px] left-[32px]">
          <button onClick={handleClick} className="w-[125px] h-l py-[4px] px-[7px] rounded-[4px] bg-Brand-Primary font-IranYekan400 text-[12px] text-White flex justify-center items-center">
            بستن
          </button>
        </footer>
      </div>
    </div>
  ) : null;
};

export default CalenderModal;
