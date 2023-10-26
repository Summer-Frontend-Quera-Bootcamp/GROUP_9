import "./index.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Persian from "@fullcalendar/core/locales/fa";
import timeGridPlugin from "@fullcalendar/timegrid";


const CalenderView: React.FC = () => {
  return (
    <div className="w-3/4 ml-m float-left mt-[100px] mb-xs -z-10 calandar1">
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