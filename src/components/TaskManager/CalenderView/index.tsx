import "./index.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Persian from "@fullcalendar/core/locales/fa";
import timeGridPlugin from "@fullcalendar/timegrid";


const CalenderView: React.FC = () => {
  return (
    <div id="CalenderContainer" className="fixed top-[187px] right-[356px] float-left mb-xs calandar1 overflow-y-scroll">
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