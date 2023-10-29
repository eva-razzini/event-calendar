import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";


const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer ({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023,10,6),
    end: new Date(2023,10,6)
  },
  {
    title: "Vacation",
    start: new Date(2023, 10, 7),
    end: new Date(2023, 10, 17),
},
{
    title: "Conference",
    start: new Date(2023, 10, 9),
    end: new Date(2023, 10, 10),
},
];

function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setallEvents] = useState(events)

  function handleAddEvent() {
    setallEvents ([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <img src="https://www.pixel4k.com/wp-content/uploads/2018/10/churei-tower-mount-fuji-in-japan-4k_1540135350.jpg" style={{width: "100%", position: "absolute", left: "0",height: "100%",top: "0",zIndex: "-1"}}></img>
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input 
          type="text" 
          placeholder="Add Title" s
          tyle={{width: "20%", marginRight: "10px"}} 
          value={newEvent.title} 
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        <DatePicker 
          placeholderText="Start Date" 
          style={{marginRight: "10px"}}
          selected={newEvent.start} 
          onChange={(start) => setNewEvent({...newEvent, start})} 
        />
        <DatePicker 
          placeholderText="End Date"
          selected={newEvent.end} 
          onChange={(end) => setNewEvent({...newEvent, end})} 
        />
        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>
          Add Event
        </button>

      </div>
      <Calendar localizer={localizer} 
      events={allEvents} 
      startAccessor={"start"} 
      endAccessor={"end"} 
      style={{height: 500, margin: "50px"}}
      />
    </div>
  );
}

export default App;
